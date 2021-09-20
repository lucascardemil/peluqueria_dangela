<?php

namespace App\Http\Controllers\Promotion;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Promotion;
use App\Servicepromotion;

class PromotionController extends Controller
{

    public function __construct()
    {
        $this->middleware('permission:promotions.index')->only('index');
        $this->middleware('permission:promotions.store')->only('store');
        $this->middleware('permission:promotions.update')->only('update');
        $this->middleware('permission:promotions.destroy')->only('destroy');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $promotions = Promotion::orderBy('id', 'DESC')->name()->paginate(10);

        return [
            'pagination' => [
                'total'         => $promotions->total(),
                'current_page'  => $promotions->currentPage(),
                'per_page'      => $promotions->perPage(),
                'last_page'     => $promotions->lastPage(),
                'from'          => $promotions->firstItem(),
                'to'            => $promotions->lastItem(),
            ],
            'promotions' => $promotions
        ];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|unique:promotions|min:4|max:190',
        ], [
            'name.required' => 'El campo nombre es obligatorio',
            'name.unique' => 'El nombre de la promocion ya existe',
            'name.min' => 'El campo nombre debe tener al menos 4 caracteres',
            'name.max' => 'El campo nombre debe tener a lo más 190 caracteres',
        ]);

        $promotion= Promotion::create($request->all());
        
        return $promotion->id;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Promotion  $promotion
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $promotion = Promotion::findOrFail($id);

        $services = $promotion->servicepromotions;

        $arrayService = array();


        foreach ($services as $value) {
            $service = Servicepromotion::with('service')->find($value->id);
            array_push($arrayService, $service->service);
        }

        $services = $services;

        return [
            'promotion' => $promotion,
            'services' => $arrayService
        ];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Promotion  $promotion
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => ['required', 'min:4', 'max:190',
                        \Illuminate\Validation\Rule::unique('promotions')->ignore(Promotion::find($id))],
        ], [
            'name.min' => 'El campo nombre debe tener al menos 4 caracteres',
            'name.max' => 'El campo nombre debe tener a lo más 190 caracteres',
        ]);

        Promotion::find($id)->update($request->all());

        return;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Promotion  $promotion
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $promotion = Promotion::findOrFail($id);
        $promotion->delete();

        return;
    }

    public function all()
    {
        $promotions = Promotion::orderBy('id', 'DESC')->get();

        return $promotions;
    }


}
