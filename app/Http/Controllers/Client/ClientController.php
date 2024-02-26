<?php

namespace App\Http\Controllers\Client;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Rules\RutValidationRule;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManagerStatic as Image;


class ClientController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeClient(Request $request)
    {
        $this->validate($request, [
            'company_id' => 'required',
            'profession_id' => 'required',
            'rut' => ['required', 'unique:users', 'min:7', new RutValidationRule],
            'name' => 'required|min:6|max:190',
            'email' => 'required|email|unique:users|min:6|max:150',
            'city' => 'required|min:6|max:300',
            'phone' => 'required|min:8',
            'birthdate' => 'required',
            'sex' => 'required',
            'image' => 'required|mimes:jpeg,jpg,png|max:4096',
        ]);

        $data = $request->all();
    
        $data['image'] = $this->uploadImage($request);

        $data['password'] = bcrypt($data['rut']);
        $data['key'] = md5($data['password']);

        $data['name'] = strtoupper($data['name']);
        $data['email'] = strtolower($data['email']);
        $data['city'] = ucwords($data['city']);

        $user = User::create($data);
        $user->assignRole('clientes');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateClient(Request $request, $id)
    {
        $this->validate($request, [
            'company_id' => 'required',
            'profession_id' => 'required',
            'rut' => ['required', 'min:7',
            \Illuminate\Validation\Rule::unique('users')->ignore(User::find($id)), new RutValidationRule],
            'name' => 'required|min:6|max:190',
            'email' => ['required', 'email', 'min:6', 'max:150',
            \Illuminate\Validation\Rule::unique('users')->ignore(User::find($id))],
            'city' => 'required|min:6|max:300',
            'phone' => 'required|min:8',
            'birthdate' => 'required',
            'sex' => 'required',
            'image' => 'required|mimes:jpeg,jpg,png|max:4096',
        ]);


        $data = $request->all();

        $data['image'] = $this->uploadImage($request);
        $data['name'] = strtoupper($data['name']);
        $data['email'] = strtolower($data['email']);
        $data['city'] = ucwords($data['city']);
        
        User::find($id)->update($data);

        return;
    }

    public function deleteImage(Request $request, $id)
    {
        $data = $request->all();
        if (Storage::exists($data['image'])) {
            User::find($id)->update(['image' => null]);
            Storage::delete($data['image']);
            return response()-> json(['status'=> 'success', 'message' => 'Imagen eliminada correctamente.'], 200);
        }
        return response()->json(['status'=> 'error', 'message' => 'Imagen no se elimino.'], 200);
    }

    public function uploadImage($request){

        if ($request->hasFile('image') === true) {
            $imagen = $request->file('image');
            $ruta = $imagen->store('clients', 'local');
            return '/storage/' . $ruta;
        }
    }
}
