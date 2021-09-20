<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Peluquería Dangela</title>

        <link rel="stylesheet" href="{{ asset('css/app-principal.css') }}">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    </head>
<body>
{{--<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card bg-primary text-white">
                <div class="card-header">{{ __('Bienvenido a DANGELAPP') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}" aria-label="{{ __('Login') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="email" class="col-sm-4 col-form-label text-md-right">{{ __('Correo Electrónico') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus>

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Contraseña') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> {{ __('Recordarme') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-secondary">
                                    {{ __('Iniciar Sesión') }}
                                </button>

                                <a class="btn btn-link" href="{{ route('password.request') }}">
                                    {{ __('¿Olvidaste tu contraseña?') }}
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>--}}
<div class="page login-page">

        <div class="container d-flex align-items-center">
        <div class="form-holder has-shadow">
            <div class="row">
            <!-- Logo & Information Panel-->
            <div class="col-lg-6">
                <div class="info d-flex align-items-center">
                <div class="content">
                    <div class="logo">
                    <h1>DANGELAPP WEB</h1>
                    </div>
                    <p>Sistema web para la administración de puntos de nuestros clientes.</p>
                </div>
                </div>
            </div>
            <!-- Form Panel    -->
            <div class="col-lg-6 bg-white">
                <div class="form d-flex align-items-center">
                <div class="content">
                    <form method="POST" action="{{ route('login') }}" aria-label="{{ __('Login') }}">
                        @csrf
                        <div class="form-group">
                            <input id="email" type="email"
                                    class="input-material"
                                    name="email" value="{{ old('email') }}" required>
                            {{--<input id="login-username" type="text" name="loginUsername"
                            required data-msg="Please enter your username" class="input-material">--}}
                            <label for="email" class="label-material">Email*</label>

                            @if ($errors->has('email'))
                                <span class="text-danger" role="">
                                    <strong>Los datos no coinciden</strong>
                                </span>
                            @endif
                        </div>
                        <div class="form-group">
                            {{--<input id="login-password" type="password" name="loginPassword" required  class="input-material">--}}
                            <input id="password" type="password"
                                    class="input-material"
                                    name="password" required>
                            <label for="password" class="label-material">Contraseña</label>

                            @if ($errors->has('password'))
                                <span class="text-danger" role="">
                                    <strong>Los datos no coinciden</strong>
                                </span>
                            @endif
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                            <label class="form-check-label" for="remember">
                                {{ __('Recordarme') }}
                            </label>
                        </div>

                        <button type="submit" class="btn btn-primary">
                                {{ __('Iniciar Sesión') }}
                        </button>


                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>


    <div class="copyrights text-center">
      <p>Desarrollado por Maxisoft</a>
        <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->
      </p>
    </div>
  </div>

  <script src="{{ asset('js/app.js') }}"></script>
  <script src="{{ asset('js/app-principal.js') }}"></script>
  <!-- Latest compiled and minified JavaScript -->
  {{--@yield('script')--}}

</body>

</html>
