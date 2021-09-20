<?php

namespace App\Http\Controllers\User;

use App\User;
use App\Service;
use App\UserOffer;
use App\UserPersonalService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Mail\OfferUserSend;

class UserServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        /*$services = $user->services()
                        ->select( DB::raw('*, count(*) AS contador') )
                        ->groupBy('id')
                        ->get();*/
        $services = Service::select(DB::raw('*, count(*) as contador'))
                        ->join('user_personal_services', 'services.id', '=', 'user_personal_services.service_id')
                        ->where('user_personal_services.user_id', '=', $user->id)
                        ->orderBy('contador', 'DESC')
                        ->groupBy('services.id')
                        ->take(5)
                        ->get();

        return $services;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user, Service $service)
    {
        //sync, attach, syncWithoutDetaching
         //agrega un nuevo servicio al usuario sin eliminar las anteriores

        UserPersonalService::create($request->all());

        /*$user->services()
            ->attach([$service->id]);*/

        $total = UserPersonalService::where('user_id', '=', $user->id)->count();

        /*$total = $user->services()
                    ->count();*/

        if( ($total % 1) == 0 ){

            $data = $request->all();

            $fecha = Carbon::now();
            $fechaLimite = $fecha->addMonths(1);

            $percentage = 20;

            UserOffer::create([
                'user_id'=> $data['user_id'],
                'percentage'=> $percentage,
                'expiration_date'=> $fechaLimite,
                'is_activate'=> 1,
                'created_at'=> NOW(),
                'updated_at'=> NOW()
            ]);

            $date = $fechaLimite;

            //Mail::to($user->email)->send(new OfferUserSend($user, $percentage, $date));
        }

        return $total;

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
