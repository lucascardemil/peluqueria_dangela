<?php

namespace App\Http\Controllers;

use App\Code;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\Filter;
use Spatie\QueryBuilder\QueryBuilder;

class CodeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $codes = QueryBuilder::for(Code::class)
                ->allowedIncludes('product', 'brand', 'laboratory', 'inventories')
                ->nameCode()
                ->nameProduct()
                ->nameLaboratory()
                ->nameBrand()
                ->paginate(10);

        return [
            'pagination' => [
                'total'         => $codes->total(),
                'current_page'  => $codes->currentPage(),
                'per_page'      => $codes->perPage(),
                'last_page'     => $codes->lastPage(),
                'from'          => $codes->firstItem(),
                'to'            => $codes->lastItem(),
            ],
            'codes' => $codes
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
        Code::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Code  $code
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $code = QueryBuilder::for(Code::class)
                ->allowedIncludes('product', 'brand', 'laboratory', 'inventories')
                ->findOrFail($id);

        return $code;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Code  $code
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        Code::find($id)->update($request->all());

        return;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Code  $code
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $code = Code::findOrFail($id);
        $code->delete();

        return;
    }

    public function all()
    {
        //$codes = Code::orderBy('id', 'DESC')->get();
        $codes = QueryBuilder::for(Code::class)
                ->allowedIncludes('product', 'brand', 'laboratory', 'inventories')
                ->get();


        return $codes;
    }


}
