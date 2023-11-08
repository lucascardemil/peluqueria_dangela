<?php

namespace App\Http\Controllers\Post;

use App\Servicepost;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ServicepostController extends Controller
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
        $servicepost = Servicepost::create($request->all());

        return $servicepost->id;
    }

}
