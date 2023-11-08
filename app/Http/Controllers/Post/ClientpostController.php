<?php

namespace App\Http\Controllers\Post;

use App\Clientpost;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ClientpostController extends Controller
{
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
        $clientpost = Clientpost::create($request->all());

        return $clientpost->id;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Clientpost  $clientpost
     * @return \Illuminate\Http\Response
     */
    public function show(Clientpost $clientpost)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Clientpost  $clientpost
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Clientpost $clientpost)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Clientpost  $clientpost
     * @return \Illuminate\Http\Response
     */
    public function destroy(Clientpost $clientpost)
    {
        //
    }
}
