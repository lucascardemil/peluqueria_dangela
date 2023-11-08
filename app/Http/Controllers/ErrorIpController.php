<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ErrorIpController extends Controller
{
    public function index()
    {
        return view('errors.error_ip');
    }
}
