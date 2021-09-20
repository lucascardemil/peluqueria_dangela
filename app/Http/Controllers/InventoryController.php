<?php

namespace App\Http\Controllers;

use App\Code;
use App\Inventory;
use App\ConsumeProduct;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\Filter;
use Spatie\QueryBuilder\QueryBuilder;

class InventoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $inventories = QueryBuilder::for(Inventory::class)
            ->allowedFilters('code_id', 'sucursal_id')
            ->allowedIncludes('code', 'code.product', 'code.brand', 'code.laboratory')
            ->paginate(10);

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


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $data = $request->all();

        foreach ($data['codes'] as $key => $data) {

            $consume = Inventory::create([
                'code_id' => $data['code_id'],
                'sucursal_id' => $data['sucursal_id'],
                'price_cost' => $data['price_cost'],
                'price_sale' => $data['price_sale'],
                'iva' => $data['iva'],
                'utility' => $data['utility'],
                'quantity' => $data['quantity'],
            ]);
            $consume->save();

        }


    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Inventory  $inventory
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $inventory = Inventory::findOrFail($id);

        return $inventory;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Inventory  $inventory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        Inventory::find($id)->update($request->all());

        return;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Inventory  $inventory
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $inventory = Inventory::findOrFail($id);
        $inventory->delete();

        return;
    }

    public function totalInventory($idSucursal){

        $total = Inventory::where('sucursal_id', '=', $idSucursal )->
                            sum('quantity');

        return [ 'total' => $total ];

    }

    public function consumeProduct(Request $request){

        $dataArray = $request->all();

        foreach ($dataArray['products'] as $key => $data) {

            $total = 0;
            $resultado = '';
            $idInventory = null;

            $total = Inventory::where('code_id', '=', $data['code_id'] )->
                                where('sucursal_id', '=', $data['sucursal_id'] )->
                                sum('quantity');

            $inventories = Inventory::orderBy('id', 'ASC')->
                                    where('code_id', '=', $data['code_id'] )->
                                    where('sucursal_id', '=', $data['sucursal_id'] )->
                                    get();

            $quantity = $data['quantity'];
            $quantityConsume = $data['quantity'];

            if($quantity > $total){
                $resultado = 'La cantidad ingresada es mayor al stock total del producto';
            }
            else{
                $resultado = 'Consumo del producto realizado con éxito';
                foreach ($inventories as $key => $value) {

                    $quantityFor = $value->quantity;

                    if($value->quantity > 0) {

                        if($quantity <= $value->quantity && $quantity > 0){
                            $idInventory = $value->id;
                            $quantityFor = $quantityFor - $quantity;

                            $quantity = $quantity - $quantityFor;

                            $inventory = Inventory::findOrFail($idInventory);
                            $inventory->quantity = $quantityFor;
                            $inventory->save();

                            $consume = ConsumeProduct::create([
                                'code_id' => $inventory->code_id,
                                'sucursal_id' => $inventory->sucursal_id,
                                'price' => $inventory->price,
                                'quantity' => $quantityConsume,
                                'type' => $inventory->type,
                            ]);
                            $consume->save();
                        }
                        else{
                            $idInventory = $value->id;
                            $quantity = $quantity - $quantityFor;
                            $inventory = Inventory::findOrFail($idInventory);
                            $inventory->quantity = 0;
                            $inventory->save();

                            $consume = ConsumeProduct::create([
                                'code_id' => $inventory->code_id,
                                'sucursal_id' => $inventory->sucursal_id,
                                'price' => $inventory->price,
                                'quantity' => $quantityConsume,
                            ]);
                            $consume->save();
                        }

                    }

                }
            }

        }





        return [
            'total' => $total, 'resultado' => $resultado/*, 'inventario' => $inventory*/
        ];
    }

}
