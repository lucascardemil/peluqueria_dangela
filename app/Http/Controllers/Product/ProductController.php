<?php

namespace App\Http\Controllers\Product;

use App\Product;
use App\Inventory;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    protected $rule;
    protected $product;
    protected $inventory;

    public function __construct(Rule $rule, Product $product, Inventory $inventory)
    {
        $this->rule = $rule;
        $this->product = $product;
        $this->inventory = $inventory;
    }


    public function productsAll()
    {
        $products = $this->product->with('inventories')->orderBy('id', 'DESC')->get();
        return $products;
        
    }


    public function index()
    {
        $products = $this->product->with('inventories')->name()->orderBy('id', 'DESC')->paginate(10);

        return [
            'pagination' => [
                'total'         => $products->total(),
                'current_page'  => $products->currentPage(),
                'per_page'      => $products->perPage(),
                'last_page'     => $products->lastPage(),
                'from'          => $products->firstItem(),
                'to'            => $products->lastItem(),
            ],
            'products' => $products
        ];
    }
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|min:4|unique:products|max:190',
            'code' => 'required|min:4|unique:products|max:190',
            'supplier' => 'required|min:4|max:190'
        ], [
            'name.required' => 'El campo nombre es obligatorio',
            'name.unique' => 'El nombre del producto ya existe',
            'name.min' => 'El campo nombre debe tener al menos 4 caracteres',
            'name.max' => 'El campo nombre debe tener a lo más 190 caracteres',
            'code.required' => 'El campo codigo es obligatorio',
            'code.unique' => 'El codigo del producto ya existe',
            'code.min' => 'El campo codigo debe tener al menos 4 caracteres',
            'code.max' => 'El campo codigo debe tener a lo más 190 caracteres',
            'supplier.required' => 'El campo proveedor es obligatorio',
            'supplier.unique' => 'El proveedor ya existe',
            'supplier.min' => 'El campo proveedor debe tener al menos 4 caracteres',
            'supplier.max' => 'El campo proveedor debe tener a lo más 190 caracteres',
        ]);

        $product = $this->product->create($request->all());

        return $product->id;
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => ['required', 'min:4', 'max:190', $this->rule->unique('products')->ignore($this->product->find($id))],
            'code' => ['required', 'min:4', 'max:190', $this->rule->unique('products')->ignore($this->product->find($id))],
        ], [
            'name.required' => 'El campo nombre es obligatorio',
            'name.unique' => 'El nombre del producto ya existe',
            'name.min' => 'El campo nombre debe tener al menos 4 caracteres',
            'name.max' => 'El campo nombre debe tener a lo más 190 caracteres',
            'code.required' => 'El campo codigo es obligatorio',
            'code.unique' => 'El codigo del producto ya existe',
            'code.min' => 'El campo codigo debe tener al menos 4 caracteres',
            'code.max' => 'El campo codigo debe tener a lo más 190 caracteres',
        ]);

        $product = $this->product->find($id);
        $updated = $product->update($request->all());

        if ($request->attribute > 0) {
            $inventories = $this->inventory->where('product_id', $id)->get();
            if (!$inventories->isEmpty()) {
                foreach ($inventories as $inventory) {
                    if ($request->attribute !== $inventory->quantity) {
                        $cantidad = $inventory->quantity * $request->attribute;
                        $total = $inventory->price * $inventory->quantity;

                        $this->inventory->where('product_id', $id)->update([
                            'quantity' => $cantidad,
                            'price' => $total / $cantidad
                        ]);
                    }
                }
            }
        }

        if ($updated) {
            return $product;
        }
    }

    public function destroy($id)
    {
        $product = $this->product->findOrFail($id);
        $product->delete();

        return $product;
    }
}
