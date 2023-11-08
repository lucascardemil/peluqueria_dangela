<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Redirector;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');

        $this->middleware(function ($request, $next) {
            $key = $request->route('key');

            if (is_null($key)) {
                return redirect('404');
            }

            return $next($request);
        });
    }

    public function index($key)
    {
        $users = User::where('key', $key)->get();
        if(count($users) > 0){
            foreach ($users as $user) {
                if(!empty($user->key) && $user->key == $key){
                    return view('auth.login', ['key' => $user->key, 'email' => $user->email]);
                }else{
                    return redirect('error_url');
                }
            }
        }else{
            return redirect('error_url');
        }

    }

    public function login(Request $request, $key)
    {
        $this->validateLogin($request);

        // If the class is using the ThrottlesLogins trait, we can automatically throttle
        // the login attempts for this application. We'll key this by the username and
        // the IP address of the client making these requests into this application.
        if ($this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);

            return $this->sendLockoutResponse($request);
        }

        if ($this->attemptLogin($request)) {
            return $this->sendLoginResponse($request, $key);
        }

        // If the login attempt was unsuccessful we will increment the number of attempts
        // to login and redirect the user back to the login form. Of course, when this
        // user surpasses their maximum number of attempts they will get locked out.
        $this->incrementLoginAttempts($request);

        return $this->sendFailedLoginResponse($request);
    }

    protected function sendLoginResponse(Request $request, $key)
    {
        $request->session()->regenerate();

        $this->clearLoginAttempts($request);

        return $this->authenticated($request, $this->guard()->user(), $key)
                ?: redirect()->intended($this->redirectPath());
    }

    public function logout(Request $request, $key)
    {
        $this->guard()->logout();

        $request->session()->invalidate();
        $request->session()->forget('key');

        return $this->loggedOut($request) ?: redirect()->route('login', ['key' => $key]);
    }

    protected function authenticated(Request $request, $user, $key)
    {
        $ipAddress = $request->ip();
        if ($user->ip_address == null) {
            // Si no tiene una direccion IP registrada, actualiza la direccion IP en la base de datos
            $user->update(['ip_address' => $ipAddress]);
        }
        session(['key' => $key]);
    }
}
