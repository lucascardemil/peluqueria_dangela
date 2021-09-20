<?php

namespace App\Http\Controllers\Post;

use App\Sucursal;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SucursalController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:sucursals.index')->only('index');
        $this->middleware('permission:sucursals.store')->only('store');
        $this->middleware('permission:sucursals.update')->only('update');
        $this->middleware('permission:sucursals.destroy')->only('destroy');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Sucursal  $sucursal
     * @return \Illuminate\Http\Response
     */
    public function show(Sucursal $sucursal)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Sucursal  $sucursal
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Sucursal $sucursal)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Sucursal  $sucursal
     * @return \Illuminate\Http\Response
     */
    public function destroy(Sucursal $sucursal)
    {
        //
    }

    public function all()
    {
        $sucursals = Sucursal::orderBy('id', 'DESC')->get();

        return $sucursals;
    }
}
