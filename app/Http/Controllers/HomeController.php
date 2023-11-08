<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(Auth::user()->roles->first() != null){
            if(Auth::user()->roles->first()->name == 'admin' || Auth::user()->roles->first()->name == 'sucursal'){
                return view('admin.home');
            }else{
                return view('clients.mis-puntos');
            }
        }
    }
}
