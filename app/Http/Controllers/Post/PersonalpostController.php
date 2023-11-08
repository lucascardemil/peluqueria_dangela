<?php

namespace App\Http\Controllers\Post;

use App\Personalpost;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PersonalpostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $personals = Personalpost::with('personal')
                    ->whereDay( 'created_at', '=', date('d') )
                    ->whereMonth( 'created_at', '=', date('m') )
                    ->whereYear('created_at', '=', date('Y'))
                    ->distinct()
                    ->get();

        return [
            /*'pagination' => [
                'total'         => $personals->total(),
                'current_page'  => $personals->currentPage(),
                'per_page'      => $personals->perPage(),
                'last_page'     => $personals->lastPage(),
                'from'          => $personals->firstItem(),
                'to'            => $personals->lastItem(),
            ],*/
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
        $personalpost = Personalpost::create($request->all());

        return $personalpost;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Personalpost  $personalpost
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $personal = Personalpost::whereHas('personal', function ($query) use($id) {
            $query->where('id', '=', $id);
        })->with(['personal', 'servicepost.service' /*=> function($query){
            $query->sum('price');
         }*/])->whereDay( 'created_at', '=', date('d') )
            ->whereMonth( 'created_at', '=', date('m') )
            ->whereYear('created_at', '=', date('Y'))
            //->sum('servicepost.service.price')
            ->get()
            /*->pluck('servicepost')*/;

        return $personal;
    }

}
