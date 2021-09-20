<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class AuthController extends Controller
{
    public function register(Request $request)
    {
      $user = User::create([
        'profession_id' => 1,
        'rut' => '11.111.111-1',
        //'name' => $request->name,
        'name' => 'Ed Vilo',
        'address' => 'Calle 666',
        'email' => $request->email,
        'phone' => '12345678',
        'birthdate' => NOW(),
        'sex' => 0,
        'civil' => 0,
        'children' => 0,
        'barcode' => 33443,
        'score' => 0,
        'password' => bcrypt($request->password),
      ]);

      $token = auth()->login($user);

      return $this->respondWithToken($token);
    }

    public function login(Request $request)
    {
      $credentials = $request->only(['email', 'password']);

      if (!$token = auth()->attempt($credentials)) {
        return response()->json(['error' => 'Unauthorized'], 401);
      }

      return $this->respondWithToken($token);
    }

    protected function respondWithToken($token)
    {
      return response()->json([
        'access_token' => $token,
        'token_type' => 'bearer',
        'expires_in' => auth()->factory()->getTTL() * 60
      ]);
    }
}
