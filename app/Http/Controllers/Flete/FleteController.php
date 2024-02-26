<?php

namespace App\Http\Controllers\Flete;

use App\Flete;
use App\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FleteController extends Controller
{
    public function index()
    {
        $latestFlete = Flete::latest()->first();

        return $latestFlete;
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'flete' => 'required',
        ], [
            'flete.required' => 'El campo flete es obligatorio',
        ]);

        $flete = Flete::create($request->all());
        Product::query()->update(['flete' => $flete->flete]);

        return $flete->flete;
    }
}
