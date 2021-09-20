<?php

namespace App\Http\Controllers;

use App\Inventorytemplate;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\Filter;
use Spatie\QueryBuilder\QueryBuilder;

class InventorytemplateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $templates = QueryBuilder::for(Inventorytemplate::class)
        ->allowedFilters('sucursal_id', 'name')
        ->allowedIncludes('sucursal', 'codes.brand', 'codes.product', 'codes.laboratory', 'codes.inventories')
        ->paginate(10);

        return [
            'pagination' => [
                'total'         => $templates->total(),
                'current_page'  => $templates->currentPage(),
                'per_page'      => $templates->perPage(),
                'last_page'     => $templates->lastPage(),
                'from'          => $templates->firstItem(),
                'to'            => $templates->lastItem(),
            ],
            'templates' => $templates
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

        $inventorytemplate = Inventorytemplate::create([
                'sucursal_id' => $data['sucursal_id'],
                'name' => $data['name']
            ]
        );

        $inventorytemplate->codes()->sync($data['codes']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Inventorytemplate  $inventorytemplate
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $template = QueryBuilder::for(Inventorytemplate::class)
                    ->allowedIncludes('sucursal', 'codes.brand', 'codes.product', 'codes.laboratory', 'codes.inventories')
                    ->findOrFail($id);

        return $template;
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Inventorytemplate  $inventorytemplate
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();

        Inventorytemplate::find($id)->update([
                                'sucursal_id' => $data['sucursal_id'],
                                'name' => $data['name']
                            ]);

        $inventorytemplate = Inventorytemplate::find($id);

        $inventorytemplate->codes()->sync($data['codes']);

        return $inventorytemplate;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Inventorytemplate  $inventorytemplate
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $template = Inventorytemplate::findOrFail($id);
        $template->delete();

        return;
    }

    public function all()
    {
        $template = QueryBuilder::for(Inventorytemplate::class)
            ->allowedFilters('sucursal_id', 'name')
            ->allowedIncludes('sucursal')
            ->get();

        return $template;
    }
}
