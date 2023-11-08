<?php

namespace App\Http\Middleware;

use Closure;
use App\User;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Auth;

class CheckUserIp
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
        if ($request !== null) {
            $email = $request->input('email');
            $userIpAddress = $request->ip();

            $user = User::where('email', $email)->first();

            if($user->is_blockip == 0 && $user->ip_address != null){
                $dbIpAddress = User::where('ip_address', '=' , $userIpAddress)->get();
    
                if ($dbIpAddress->isEmpty()) {
                    return redirect()->route('error_ip');
                }
            }
        }
    
        return $next($request);
    }

}
