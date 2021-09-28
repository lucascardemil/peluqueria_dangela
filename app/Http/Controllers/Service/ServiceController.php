<?php

namespace App\Http\Controllers\Service;

use App\UserPersonalService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Service;
use App\Servicepost;

class ServiceController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:services.index')->only('index');
        $this->middleware('permission:services.store')->only('store');
        $this->middleware('permission:services.update')->only('update');
        $this->middleware('permission:services.destroy')->only('destroy');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $services = Service::orderBy('id', 'DESC')->with('category')->name()->paginate(10);

        return [
            'pagination' => [
                'total'         => $services->total(),
                'current_page'  => $services->currentPage(),
                'per_page'      => $services->perPage(),
                'last_page'     => $services->lastPage(),
                'from'          => $services->firstItem(),
                'to'            => $services->lastItem(),
            ],
            'services' => $services
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
            'name' => 'required|min:4|max:190',
            'score_exchange' => 'required',
            'score_accumulated' => 'required'
        ], [
            'name.required' => 'El campo nombre es obligatorio',
            'name.min' => 'El campo nombre debe tener al menos 4 caracteres',
            'name.max' => 'El campo nombre debe tener a lo más 190 caracteres',
            'score_exchange.required' => 'El campo puntaje de cambio es obligatorio',
            'score_accumulated.required' => 'El campo puntaje que acumula es obligatorio',
        ]);

        Service::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Service  $Service
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, Service $service)
    {
        $service = $service;
        $category = $service->category;

        return  $service;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Service  $Service
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => ['required', 'min:4', 'max:190',
                        \Illuminate\Validation\Rule::unique('services')->ignore(Service::find($id))],
        ], [
            'name.required' => 'El campo nombre es obligatorio',
            'name.unique' => 'El nombre del servicio ya existe',
            'name.min' => 'El campo nombre debe tener al menos 4 caracteres',
            'name.max' => 'El campo nombre debe tener a lo más 190 caracteres',
        ]);

        Service::find($id)->update($request->all());

        return;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Service  $Service
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $Service = Service::findOrFail($id);
        $Service->delete();

        return;
    }

    public function all()
    {
        $Services = Service::orderBy('id', 'DESC')->with('category')->get();

        return $Services;
    }

    public function totalByMonth()
    {
        $fechaActual = Carbon::now();
        $fechaAnterior = Carbon::now();

        $fechaAnterior->month=$fechaActual->month-1;
        
        $services = Service::select(DB::raw('services.name, count(*) as services_count'))
                            ->join('serviceposts', 'services.id', '=', 'serviceposts.service_id')
                            ->whereBetween('serviceposts.created_at',[$fechaAnterior,$fechaActual])
                            ->orderBy('services_count', 'DESC')
                            ->groupBy('services.id')
                            ->take(5)
                            ->get();

        return  $services;

    }

    public function total()
    {
        /* cada servicio cancelado a traves de un voucher se encuentra en servicepost incluyendo cada servicio en promocion
           por lo que si lo contamos obtendremos la cantidad de servicios consumidos
        */
        $services=Servicepost::select(DB::raw('count(*) as total'))
                    ->get();
        
        /*
        consulta que estaba y arrojaba 0
        
        $total = 0;
        
        //$services = Service::withCount('users')->get();
        
        $services = Service::select(DB::raw('count(*) as users_count'))
                            ->join('user_personal_services', 'services.id', '=', 'user_personal_services.service_id')
                            ->groupBy('services.id')
                            //->take(5)
                            ->get();

        foreach( $services as $service ){
            $total += $service->users_count;
        }
        
        return [ 'total' => $total ];
        */
        return $services[0];
        
    }



    public function SelectServicesVoucher($category)
    {
        $services = Service::orderBy('id', 'DESC')->where('category_id', '=', $category)->get();
        return $services;
    }
}
