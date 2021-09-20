<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use App\User;
use App\Profession;
use Illuminate\Support\Facades\Mail;
use App\Mail\OfferProfessionSend;
use App\Mail\MasiveSend;

class MailController extends Controller
{
    public function masiveMail(Request $request)
    {
        $user = User::find($request->id);
        $urlImage = 'http://www.dangela.cl/wp-content/uploads/2018/08/Promo-Tratamiento-AB.jpg';

        Mail::to($user->email)->queue(new MasiveSend($request->subject, $request->message, $urlImage, $user));

    }

    public function sendProfession()
    {
        //$now = strtotime(NOW());

        $fechaActual = Carbon::now();
        $mes = $fechaActual->month;
        $dia = $fechaActual->day;

        $profession = Profession::whereMonth('date', '=', $mes)
                                ->whereDay('date', '=', $dia)
                                ->get();

        $this->fecha_mujer($mes, $dia);
        $this->fecha_madre($mes, $dia);
        $this->fecha_padre($mes, $dia);
        $this->fecha_trabajador($mes, $dia);

        foreach ($profession as $pro)
        {
            $users = Profession::find($pro->id)->users;
            echo "<br><br>Lista por profesión<br>";

            foreach ($users as $user) {
                echo $user->name.'<br>';
                Mail::to($user->email)->queue(new OfferProfessionSend($pro));
            }
        }
    }

    private function fecha_mujer($mes, $dia)
    {
        if ($mes == '03' && $dia == '08') {
            echo "<br><br>Lista de mujeres<br>";
            $users = User::where('sex' , '=', 1)
                        ->get();

            foreach ($users as $user) {
                //echo $user->id . ": " . $user->name . " hijos: " . $user->children . "<br>";
                Mail::to($user->email)->queue(new OfferProfessionSend('Día de la mujer'));
            }
        }
    }

    private function fecha_madre($mes, $dia)
    {
        if ($mes == '05' && $dia == '10') {
            echo "<br><br>Lista de madres<br>";
            $users = User::where('children' , '>', 0)
                        ->where('sex' , '=', 1)
                        ->get();

            foreach ($users as $user) {
                //echo $user->id . ": " . $user->name . " hijos: " . $user->children . "<br>";
                Mail::to($user->email)->queue(new OfferProfessionSend('Día de la madre'));
            }
        }
    }

    private function fecha_padre($mes, $dia)
    {
        if ($mes == '06' && $dia == '19') {
            echo "<br><br>Lista de padres<br>";
            $users = User::where('children' , '>', 0)
                        ->where('sex' , '=', 0)
                        ->get();

            foreach ($users as $user) {
                //echo $user->id . ": " . $user->name . " hijos: " . $user->children . "<br>";
                Mail::to($user->email)->queue(new OfferProfessionSend('Día del padre'));
            }
        }
    }

    private function fecha_trabajador($mes, $dia)
    {
        if ($mes == '05' && $dia == '01') {
            echo "<br><br>Lista de trabajadores<br>";
            $users = User::get();

            foreach ($users as $user) {
                //echo $user->id . ": " . $user->name . " hijos: " . $user->children . "<br>";
                Mail::to($user->email)->queue(new OfferProfessionSend('Día del trabajador'));
            }
        }
    }
}
