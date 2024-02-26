<?php

namespace App\Http\Controllers\Utility;

use App\Utility;
use App\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UtilityController extends Controller
{
    public function index()
    {
        $latestUtility = Utility::latest()->first();

        return $latestUtility;
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'utility' => 'required',
        ], [
            'utility.required' => 'El campo utilidad es obligatorio',
        ]);

        $utility = Utility::create($request->all());
        Product::query()->update(['utility' => $utility->utility]);

        return $utility->utility;
    }
}
