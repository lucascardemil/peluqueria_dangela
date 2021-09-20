<?php

namespace App\Http\Controllers\Profession;

use App\Profession;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProfessionUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Profession $profession)
    {
        $users = $profession->users()->get();

        return $users;
    }

}
