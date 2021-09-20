<?php

namespace App\Http\Controllers;

use App\UserPersonalService;
use Illuminate\Http\Request;

class UserPersonalServiceController extends Controller
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
        UserPersonalService::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\UserPersonalService  $userPersonalService
     * @return \Illuminate\Http\Response
     */
    public function show(UserPersonalService $userPersonalService)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\UserPersonalService  $userPersonalService
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserPersonalService $userPersonalService)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\UserPersonalService  $userPersonalService
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserPersonalService $userPersonalService)
    {
        //
    }
}
