<?php

namespace App\Http\Controllers\Post;

use App\Voucher;
use App\Service;
use App\Clientpost;
use App\Servicepost;
use App\Personal;
use App\Personalpost;
use App\FiltersService;
use App\FiltersPersonal;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

use Spatie\QueryBuilder\Filter;
use Spatie\QueryBuilder\QueryBuilder;



class VoucherController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:vouchers.index')->only('index');
        $this->middleware('permission:vouchers.store')->only('store');
        $this->middleware('permission:vouchers.update')->only('update');
        $this->middleware('permission:vouchers.destroy')->only('destroy');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $vouchers = Voucher::orderBy('id', 'DESC')->id()->where('is_paid', '=', 1)->paginate(10);

        return [
            'pagination' => [
                'total'         => $vouchers->total(),
                'current_page'  => $vouchers->currentPage(),
                'per_page'      => $vouchers->perPage(),
                'last_page'     => $vouchers->lastPage(),
                'from'          => $vouchers->firstItem(),
                'to'            => $vouchers->lastItem(),
            ],
            'vouchers' => $vouchers
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
        // $voucher = Voucher::create($request->all());

        // return $voucher->id;

        $data = $request->service;

        for ($i=0; $i < count($data); $i++){
            for ($z=0; $z < $data[$i]['quantity']; $z++){
                $voucher = Voucher::create([
                    'sucursal_id' => $data[$i]['sucursal_id'],
                    'user_id' => $data[$i]['client_id'],
                    'name' => $data[$i]['client_name'],
                    'total' => $data[$i]['service_price'],
                    'is_paid' => 0
                ])->id;

                Clientpost::create([
                    'voucher_id' => $voucher,
                    'user_id' => $data[$i]['client_id']
                ]);


                $servicepost = Servicepost::create([
                    'voucher_id' => $voucher,
                    'service_id' => $data[$i]['service_id'],
                    'price' => $data[$i]['service_price']
                ])->id;

                Personalpost::create([
                    'servicepost_id' => $servicepost,
                    'personal_id' => $data[$i]['personal_id']
                ]);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Voucher  $voucher
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $voucher = Voucher::with('sucursal')->findOrFail($id);

        $clientpost = $voucher->clientposts;

        $client = null;

        foreach ($clientpost as $value) {
            $client = $value->user;
        }

        $services = $voucher->serviceposts;

        $arrayService = array();


        foreach ($services as $value) {
            $service = Servicepost::with('service')->find($value->id);
            array_push($arrayService, $service);

            $personals = $service->personalposts;

            $arrayPersonal = array();

            foreach ($personals as $value) {
                $personal = Personalpost::with('personal')->find($value->id);

                array_push($arrayPersonal, $personal);
            }

            array_push($arrayService, ['personals' => $arrayPersonal] );
        }

        $services = $services;

        return [
            'voucher' => $voucher,
            'services' => $arrayService,
            //'client' => $client,
        ];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Voucher  $voucher
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        Voucher::find($id)->update([
            'aditional' => $request['aditional'],
            'payment' => $request['payment'],
            'total' => $request['total'],
            'is_paid' => 1
        ]);

        $vouchers = Voucher::where('id', '=', $id)->get();
         
        foreach($vouchers as $voucher){

            $serviceposts = $voucher->serviceposts;
            
            foreach ($serviceposts as $servicepost) {
                
                $personals = $servicepost->personalposts;

                foreach ($personals as $ps) {
                    Personalpost::find($ps->id)->update([
                        'personal_id' => $request['personal']
                    ]);
                    
                }
                
            }
        }

        return;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Voucher  $voucher
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $voucher = Voucher::findOrFail($id);
        $voucher->delete();

        return;
    }

    public function boxZ($id)
    {
        $voucher = Voucher::whereHas('sucursal', function ($query) use($id) {
            $query->where('id', '=', $id);
        })->with('sucursal', 'serviceposts.service', 'serviceposts.personalposts.personal')
        ->where('is_paid', '=', 1)
        ->whereDay( 'created_at', '=', date('d') )
        ->whereMonth( 'created_at', '=', date('m') )
        ->whereYear('created_at', '=', date('Y'))
        ->get();

        return $voucher;
    }

    public function listaVoucher($id)
    {
        $voucher = Voucher::whereHas('sucursal', function ($query) use($id) {
            $query->where('id', '=', $id);
        })->with('sucursal')
        ->where('is_paid', '=', 1)
        ->whereDay( 'created_at', '=', date('d') )
        ->whereMonth( 'created_at', '=', date('m') )
        ->whereYear('created_at', '=', date('Y'))
        ->where('is_paid', '=', 1)
        ->get();


        $pdf = PDF::loadView('boleta.lista', compact(['voucher']) );

        return $pdf->download('cajaZ '.date('d').'-'.date('m').'-'.date('Y').'.pdf');
    }

    public function voucherPersonal($idS, $idP)
    {
        $vouchers = Voucher::with('serviceposts.service')
        ->where('is_paid', '=', 1)
        ->whereHas('sucursal', function ($query) use($idS) {
            $query->where('id', '=', $idS);
        })->whereHas('serviceposts.personalposts.personal', function ($query) use($idP) {
            $query->where('personals.id', '=', $idP);
            $query->groupBy('personals.id');
        })
        ->whereDay('created_at', '=', date('d') )
        ->whereMonth('created_at', '=', date('m') )
        ->whereYear('created_at', '=', date('Y'))
        ->get();

        return $vouchers;

        //$pdf = PDF::loadView('boleta.lista', compact(['voucher']) );

       // return $pdf->download('cajaZ '.date('d').'-'.date('m').'-'.date('Y').'.pdf');
    }

    public function totalVoucherPersonal($id)
    {
        $totalVoucher = Voucher::with('serviceposts.personalposts.personal',
                                    'serviceposts.service')
        ->where('is_paid', '=', 1)
        ->whereDay('created_at', '=', date('d') )
        ->whereMonth('created_at', '=', date('m') )
        ->whereYear('created_at', '=', date('Y'))
        
        ->get();

        return $totalVoucher;
    }

    public function boleta($id)
    {
        $voucher = Voucher::with('sucursal')->findOrFail($id);

        $clientpost = $voucher->clientposts;

        $client = null;

        foreach ($clientpost as $value) {
            $client = $value->user;
        }

        $services = $voucher->serviceposts;

        $arrayService = array();


        foreach ($services as $value) {
            $service = Servicepost::with('service')->find($value->id);
            array_push($arrayService, $service);

            $personals = $service->personalposts;

            $arrayPersonal = array();

            foreach ($personals as $value) {
                $personal = Personalpost::with('personal')->find($value->id);

                array_push($arrayPersonal, $personal);
            }
            array_push($arrayService, ['personals' => $arrayPersonal] );
        }

        $services = $services;

        //$pdf = PDF::loadView('boleta.pdf', compact(['voucher', 'services']) );

        //return $pdf->download('Voucher N° '.$id.'.pdf');

        return view('boleta.boleta', compact(['voucher', 'services']) );
    }

    public function pdf($id)
    {
        $voucher = Voucher::with('sucursal')->findOrFail($id);

        $clientpost = $voucher->clientposts;

        $client = null;

        foreach ($clientpost as $value) {
            $client = $value->user;
        }

        $services = $voucher->serviceposts;

        $arrayService = array();

        
        foreach ($services as $value) {
            $service = Servicepost::with('service')->find($value->id);
            array_push($arrayService, $service);

            $personals = $service->personalposts;

            $arrayPersonal = array();

            foreach ($personals as $value) {
                $personal = Personalpost::with('personal')->find($value->id);

                array_push($arrayPersonal, $personal);
            }

            array_push($arrayService, ['personals' => $arrayPersonal] );
        }

        $services = $services;

        $pdf = PDF::loadView('boleta.boletaPDF', compact(['voucher', 'services']) )->setPaper([ 0 , 0 , 226.772 , 141.732 ], 'landscape');

        return $pdf->download('Voucher N° '.$id.'.pdf');
    }

    public function filtroVoucher(){

        $vouchers = QueryBuilder::for(Voucher::class)
            ->where('is_paid', '=', 1)
            ->allowedFilters('sucursal_id', 'name', 'payment',
                    Filter::scope('day'),
                    Filter::scope('month'),
                    Filter::scope('year'),
                    Filter::custom('personal', FiltersPersonal::class),
                    Filter::custom('service', FiltersService::class)
                )
            ->allowedIncludes('sucursal', 'serviceposts.service', 'serviceposts.personalposts.personal')
            ->get();
            //->paginate(10);

        return $vouchers;

    }



     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
   
    public function vouchersImpagos($id)
    {
        $vouchers = Voucher::where('user_id', '=', $id)
                            ->get();
         
        foreach($vouchers as $voucher){
            $clientpost = $voucher->clientposts;

            $client = null;

            foreach ($clientpost as $value) {
                $client = $value->user;
            }

           
            $serviceposts = $voucher->serviceposts;
            
            foreach ($serviceposts as $servicepost) {



                ServicePost::with('service')->find($servicepost->id);
                $s=$servicepost->service;


                
                $personals = $servicepost->personalposts;
                foreach ($personals as $ps) {
                    Personalpost::with('personal')->find($ps->id);
                    $p=$ps->personal;
                }
                
            }
       }

        return $vouchers;
    }
}
