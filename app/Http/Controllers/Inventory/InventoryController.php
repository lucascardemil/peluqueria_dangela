<?php

namespace App\Http\Controllers\Inventory;

use App\Inventory;
use App\Product;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;

class InventoryController extends Controller
{
    protected $rule;
    protected $inventory;
    protected $product;

    public function __construct(Rule $rule, Inventory $inventory, Product $product)
    {
        $this->rule = $rule;
        $this->inventory = $inventory;
        $this->product = $product;
    }

    public function index()
    {
        $inventories = $this->product->with('inventories')->name()->orderBy('id', 'DESC')->paginate(10);

        return [
            'pagination' => [
                'total'         => $inventories->total(),
                'current_page'  => $inventories->currentPage(),
                'per_page'      => $inventories->perPage(),
                'last_page'     => $inventories->lastPage(),
                'from'          => $inventories->firstItem(),
                'to'            => $inventories->lastItem(),
            ],
            'inventories' => $inventories
        ];
    }


    public function store(Request $request)
    {
        $this->validate($request, [
            'price' => 'required',
            'quantity' => 'required',
        ], [
            'price.required' => 'El campo precio es obligatorio',
            'quantity.required' => 'El campo cantidad es obligatorio',
        ]);

        $inventory = $this->inventory->create($request->all());

        return $inventory;
    }

    public function destroy($id)
    {
        $inventory = $this->inventory->findOrFail($id);
        $inventory->delete();

        return $inventory;
    }
}
