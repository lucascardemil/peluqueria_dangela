<?php

namespace App\Http\Controllers;

use Image;
use App\Imagenmail;
use Illuminate\Http\Request;

class ImagenmailController extends Controller
{
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
        $arreglo = array();
        $uploadedFile = $request->pics;

        foreach ($uploadedFile as $file) {
            $archivo = $file->store('dummy');
            $url = env('APP_URL').':8000/'.$archivo;
            $path =  'D:/thevi/trabajos 2018/laravel_GIT/Peluqueria/public/'.$archivo;

            array_push($arreglo, $url);

            $image = $file;

            Image::make($image)/*->resize(800, 800)*/->save($path);

            Imagenmail::create(['name' => $file->getClientOriginalName(), 'url'=> $url]);

        }

        return response($arreglo);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Imagenmail  $imagenmail
     * @return \Illuminate\Http\Response
     */
    public function show(Imagenmail $imagenmail)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Imagenmail  $imagenmail
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Imagenmail $imagenmail)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Imagenmail  $imagenmail
     * @return \Illuminate\Http\Response
     */
    public function destroy(Imagenmail $imagenmail)
    {
        //
    }
}
