<?php

namespace App\Http\Controllers\Personal;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Personal;


class PersonalController extends Controller
{

    public function __construct()
    {
        $this->middleware('permission:personals.index')->only('index');
        $this->middleware('permission:personals.store')->only('store');
        $this->middleware('permission:personals.update')->only('update');
        $this->middleware('permission:personals.destroy')->only('destroy');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $personals = Personal::orderBy('id', 'DESC')->name()->paginate(10);

        return [
            'pagination' => [
                'total'         => $personals->total(),
                'current_page'  => $personals->currentPage(),
                'per_page'      => $personals->perPage(),
                'last_page'     => $personals->lastPage(),
                'from'          => $personals->firstItem(),
                'to'            => $personals->lastItem(),
            ],
            'personals' => $personals
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
            'name' => 'required|unique:personals|min:4|max:190',
        ], [
            'name.required' => 'El campo nombre es obligatorio',
            'name.unique' => 'El nombre del personal ya existe',
            'name.min' => 'El campo nombre debe tener al menos 4 caracteres',
            'name.max' => 'El campo nombre debe tener a lo más 190 caracteres',
        ]);

        $personal = Personal::create($request->all());

        return $personal;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Personal  $personal
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $personal = Personal::findOrFail($id);

        return $personal;
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Personal  $personal
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {
        $this->validate($request, [
            'name' => ['required', 'min:4', 'max:190',
                        \Illuminate\Validation\Rule::unique('personals')->ignore(Personal::find($id))],
        ], [
            'name.required' => 'El campo nombre es obligatorio',
            'name.unique' => 'El nombre del personal ya existe',
            'name.min' => 'El campo nombre debe tener al menos 4 caracteres',
            'name.max' => 'El campo nombre debe tener a lo más 190 caracteres',
        ]);

        Personal::find($id)->update($request->all());

        return;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Personal  $personal
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $personal = Personal::findOrFail($id);
        $personal->delete();

        return;
    }

    public function all()
    {
        $personals = Personal::orderBy('id', 'DESC')->get();

        return $personals;
    }
}
