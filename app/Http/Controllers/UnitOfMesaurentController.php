<?php

namespace App\Http\Controllers;

use App\UnitOfMesaurent;
use Illuminate\Http\Request;

class UnitOfMesaurentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $units = UnitOfMesaurent::orderBy('id', 'DESC')->name()->paginate(10);

        return [
            'pagination' => [
                'total'         => $units->total(),
                'current_page'  => $units->currentPage(),
                'per_page'      => $units->perPage(),
                'last_page'     => $units->lastPage(),
                'from'          => $units->firstItem(),
                'to'            => $units->lastItem(),
            ],
            'units' => $units
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
        UnitOfMesaurent::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $unit = UnitOfMesaurent::findOrFail($id);

        return $unit;
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        UnitOfMesaurent::find($id)->update($request->all());

        return;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $unit = UnitOfMesaurent::findOrFail($id);
        $unit->delete();

        return;
    }

    public function all()
    {
        $unit = UnitOfMesaurent::orderBy('id', 'DESC')->get();

        return $unit;
    }
}
