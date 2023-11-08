<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class CheckSessionKey
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // Obtiene la clave almacenada en la sesión
        $sessionKey = session('key');
        
        // Obtiene el usuario autenticado
        $user = Auth::user();
        
        // Compara la clave de la sesión con la clave en la base de datos del usuario
        if ($sessionKey !== $user->key) {
            // Si no coinciden, redirige al usuario al formulario de inicio de sesión
            Auth::logout();

            $request->session()->invalidate();
            $request->session()->forget('key');
            return redirect()->route('error_url');
        }

        return $next($request);
    }
}
