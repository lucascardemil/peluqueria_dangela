<?php

namespace App\Http\Controllers\Sale;

use App\Product;
use App\Inventory;
use App\Sale;
use App\ProductSale;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Barryvdh\DomPDF\Facade as PDF;
use Exception;
use Mockery\Undefined;

class SaleController extends Controller
{
    protected $product;
    protected $inventory;
    protected $sale;
    protected $user;
    protected $productSale;

    public function __construct(Product $product, Inventory $inventory, Sale $sale, ProductSale $productSale)
    {
        $this->sale = $sale;
        $this->product = $product;
        $this->inventory = $inventory;
        $this->productSale = $productSale;
    }

    public function index()
    {
        $user = Auth::user();
        $search = request('calendar');

        $query = $this->sale->with('productSales', 'payment', 'productSales.product')->orderBy('total', 'DESC');

        if (!$user->isAdmin()) {
            $query->where('user_id', $user->id);
        }

        if ($search !== 'undefined') {
            $query->whereRaw("DATE_FORMAT(updated_at, '%Y-%m-%d') = ?", [$search]);
        }

        $sales = $query->paginate(10);

        return [
            'pagination' => [
                'total'         => $sales->total(),
                'current_page'  => $sales->currentPage(),
                'per_page'      => $sales->perPage(),
                'last_page'     => $sales->lastPage(),
                'from'          => $sales->firstItem(),
                'to'            => $sales->lastItem(),
            ],
            'sales' => $sales

        ];
    }


    public function store(Request $request)
    {
        $sale_id = $this->sale->create([
            'user_id' => Auth::id(),
            'payment_id' => $request->payment,
            'total' => $request->total,
            'discount' => 0
        ])->id;


        foreach ($request->cart as $key => $cart) {

            $this->productSale->create([
                'sale_id' => $sale_id,
                'product_id' => $cart['id'],
                'quantity' => $cart['quantity'],
                'neto' => $cart['neto'],
                'total' => $cart['total'],
                'utility' => $cart['utility'],
            ]);

            $inventories = $this->inventory->where('product_id', $cart['id'])->orderBy('id', 'ASC')->get();

            foreach ($inventories as $key => $inventory) {
                // Calcula la cantidad a descontar para este producto
                $discountQuantity = min($cart['quantity'], $inventory['quantity']);


                // Aplica el descuento y actualiza la cantidad del producto
                $inventories[$key]['quantity'] -= $discountQuantity;
                $inventories[$key]['discount'] += $discountQuantity;

                // Actualiza el total a descontar
                $cart['quantity'] -= $discountQuantity;


                $this->inventory->where('id', $inventory['id'])->update([
                    'discount' => $inventory['discount'],
                    'quantity' => $inventory['quantity']
                ]);


                // Si ya se han descontado todos los productos necesarios, detén el bucle
                if ($cart['quantity'] <= 0) {
                    break;
                }
            }
        }
    }

    public function destroy($id)
    {
        try {
            $products = $this->productSale->where('sale_id', $id)->get();
            foreach ($products as $product) {
                $inventories =  $this->inventory->where('product_id', $product['product_id'])->orderBy('id', 'ASC')->get();
                foreach ($inventories as $inventory) {
                    if ($inventory['discount'] > 0 && $inventory['discount'] >= $product['quantity']) {
                        $this->inventory->where('id', $inventory['id'])->update([
                            'discount' => $inventory['discount'] - $product['quantity'],
                            'quantity' => $inventory['quantity'] + $inventory['discount'],
                        ]);
                    }
                }
                $this->productSale->where('sale_id', $id)
                    ->where('product_id', $product['product_id'])
                    ->delete();
            }

            $this->sale->where('id', $id)->delete();

            // Devolver una respuesta indicando éxito
            return response()->json(['status' => true], 200);
        } catch (\Exception $e) {
            // Devolver una respuesta indicando el error
            return response()->json(['status' => false], 500);
        }
    }


    public function generateReceipt($id)
    {
        $sales = $this->sale->with('productSales', 'payment', 'user', 'productSales.product')->where('id', '=', $id)->get();
        $pdf = PDF::loadView('sales.receipt-sale', compact('sales'))->setPaper('B8', 'portrait');
        return $pdf->stream('Recibo N° ' . $id . '.pdf');
    }

    public function generateBoxClosureZ($fecha)
    {
        $sales = $this->sale->with('productSales', 'payment', 'user', 'productSales.product')->whereDate('created_at', $fecha)->get();

        if (count($sales) > 0) {
            $pdf = PDF::loadView('sales.box-closure-z', compact('sales', 'fecha'));
            return $pdf->stream('CajaZ-' . $fecha . '.pdf');
        } else {
            return response()->json(['error' => 0], 200);
        }
    }
}
