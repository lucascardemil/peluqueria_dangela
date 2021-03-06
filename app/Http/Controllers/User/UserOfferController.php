<?php

namespace App\Http\Controllers\User;


use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\UserOffer;

class UserOfferController extends Controller
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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
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
        UserOffer::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\UserOffer  $userOffer
     * @return \Illuminate\Http\Response
     */
    public function show(UserOffer $userOffer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\UserOffer  $userOffer
     * @return \Illuminate\Http\Response
     */
    public function edit(UserOffer $userOffer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\UserOffer  $userOffer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserOffer $userOffer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\UserOffer  $userOffer
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserOffer $userOffer)
    {
        //
    }
}
