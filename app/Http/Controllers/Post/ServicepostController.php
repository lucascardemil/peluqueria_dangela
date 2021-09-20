<?php

namespace App\Http\Controllers\Post;

use App\Servicepost;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ServicepostController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:serviceposts.index')->only('index');
        $this->middleware('permission:serviceposts.store')->only('store');
        $this->middleware('permission:serviceposts.update')->only('update');
        $this->middleware('permission:serviceposts.destroy')->only('destroy');
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
        $servicepost = Servicepost::create($request->all());

        return $servicepost->id;
    }

}
