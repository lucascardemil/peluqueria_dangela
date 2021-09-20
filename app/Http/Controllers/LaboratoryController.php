<?php

namespace App\Http\Controllers;

use App\Laboratory;
use Illuminate\Http\Request;

class LaboratoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $laboratories = Laboratory::orderBy('id', 'DESC')->name()->paginate(10);

        return [
            'pagination' => [
                'total'         => $laboratories->total(),
                'current_page'  => $laboratories->currentPage(),
                'per_page'      => $laboratories->perPage(),
                'last_page'     => $laboratories->lastPage(),
                'from'          => $laboratories->firstItem(),
                'to'            => $laboratories->lastItem(),
            ],
            'laboratories' => $laboratories
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
        Laboratory::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Laboratory  $laboratory
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $laboratory = Laboratory::findOrFail($id);

        return $laboratory;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Laboratory  $laboratory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        Laboratory::find($id)->update($request->all());

        return;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Laboratory  $laboratory
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $laboratory = Laboratory::findOrFail($id);
        $laboratory->delete();

        return;
    }

    public function all()
    {
        $laboratory = Laboratory::orderBy('id', 'DESC')->get();

        return $laboratory;
    }
}
