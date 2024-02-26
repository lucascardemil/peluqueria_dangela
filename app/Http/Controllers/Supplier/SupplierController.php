<?php

namespace App\Http\Controllers\Supplier;

use App\Supplier;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Rules\RutValidationRule;

class SupplierController extends Controller
{
    public function index()
    {
        $suppliers = Supplier::orderBy('id', 'DESC')->paginate(10);

        return [
            'pagination' => [
                'total'         => $suppliers->total(),
                'current_page'  => $suppliers->currentPage(),
                'per_page'      => $suppliers->perPage(),
                'last_page'     => $suppliers->lastPage(),
                'from'          => $suppliers->firstItem(),
                'to'            => $suppliers->lastItem(),
            ],
            'suppliers' => $suppliers
        ];
    }
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|min:4|max:190',
            'rut' => ['required', 'unique:suppliers', 'min:7', new RutValidationRule],
            'phone' => 'min:9|max:9',
            'address' => 'min:4|max:190',
            'commercial_business' => 'min:4|max:190',
        ], [
            'name.required' => 'El campo nombre es obligatorio',
            'name.unique' => 'El nombre de la promocion ya existe',
            'name.min' => 'El campo nombre debe tener al menos 4 caracteres',
            'name.max' => 'El campo nombre debe tener a lo más 190 caracteres',
            'rut.required' => 'El campo rut es obligatorio',
            'rut.unique' => 'El rut ya existe',
            'rut.min' => 'El campo rut debe tener al menos 12 caracteres',
            'phone.min' => 'El campo telefono debe tener al menos 9 caracteres',
            'phone.max' => 'El campo telefono debe tener a lo más 9 caracteres',
            'address.min' => 'El campo direccion debe tener al menos 4 caracteres',
            'address.max' => 'El campo direccion debe tener a lo más 190 caracteres',
            'commercial_business.min' => 'El campo giro debe tener al menos 4 caracteres',
            'commercial_business.max' => 'El campo giro debe tener a lo más 190 caracteres',
        ]);

        $supplier = Supplier::create($request->all());

        return $supplier->id;
    }
}
