<?php

namespace App\Http\Controllers\Promotion;

use App\Servicepromotion;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ServicepromotionController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Promotion $promotion)
    {
        $services = $promotion->servicepromotions()->get();

        return $services;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $servicepromotion = ServicePromotion::create($request->all());

        return $servicepromotion->id;
    }

}
