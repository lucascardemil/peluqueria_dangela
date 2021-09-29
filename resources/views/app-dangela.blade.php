<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Peluquería Dangela</title>

        

        <link rel="stylesheet" href="{{ asset('css/app-principal.css') }}">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">

        <style>
            .bg-navbar{
                background-color: #cf32cf !important;
            }

            .toast {
                flex-basis: 350px;
                max-width: 350px;
                font-size: 0.875rem;
                background-color: green;
                background-clip: padding-box;
                border: 1px solid rgba(0, 0, 0, 0.1);
                box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
                opacity: 0;
                border-radius: 0.25rem;
            }
        </style>


    </head>
    <body>
        <nav class="navbar navbar-expand-lg bg-navbar">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{-- config('app.name', 'Laravel') --}}
                    <img width="100" height="40" src="{{ asset('img/logo_blanco_nombre.png') }}" alt="">
                </a>
                <a id="toggle-btn" href="#" class="menu-btn active"><span></span><span></span><span></span></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('home') }}">Sistema de Puntos</a>
                        </li>
                        @can('sistema-post')
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('sistema-post') }}">Sistema POS</a>
                            </li>
                        @endcan
                        @can('buscar-voucher')
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('buscar-voucher') }}">Buscar Voucher</a>
                            </li>
                        @endcan
                    </ul>
                    <!--<ul class="navbar-nav mr-auto">
                        @can('personales')
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('personales') }}">Personales</a>
                            </li>
                        @endcan
                        @can('empresas')
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('empresas') }}">Empresas</a>
                            </li>
                        @endcan
                        @can('profesiones')
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('profesiones') }}">Profesiones</a>
                            </li>
                        @endcan
                        @can('usuarios')
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('usuarios') }}">Usuarios</a>
                            </li>
                        @endcan
                        @can('servicios')
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('servicios') }}">Servicios</a>
                            </li>
                        @endcan
                        @can('score.admin')
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('detalleUsuario') }}">Administrar Puntaje Usuario</a>
                            </li>
                        @endcan
                    </ul>-->

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                            </li>
                            {{--
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                            </li> --}}
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#"
                                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }} 
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                        onclick="event.preventDefault();
                                                        document.getElementById('logout-form').submit();">
                                        {{ __('Cerrar Sesión') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <div class="page-content d-flex align-items-stretch">

            <nav class="side-navbar pt-3 bg-navbar text-white">
                <span class="heading">Menú</span>
                <ul class="list-unstyled">
                        <li>
                            <a href="/"><i class="fas fa-home"></i> Inicio</a>
                        </li>
                    @can('categorias')
                        <li>
                            <a href="{{ route('categorias') }}"><i class="fas fa-align-center"></i> Categorías</a>
                        </li>
                    @endcan
                    @can('servicios')
                        <li>
                            <a href="{{ route('servicios') }}"><i class="fas fa-book"></i> Servicios</a>
                        </li>
                    @endcan
                    @can('promociones')
                        <li>
                            <a href="{{ route('promociones') }}"><i class="fas fa-book"></i> Promociones</a>
                        </li>
                    @endcan
                    @can('personales')
                        <li>
                            <a href="{{ route('personales') }}"><i class="fas fa-user-tie"></i> Personales</a>
                        </li>
                    @endcan
                    @can('empresas')
                        <li>
                            <a href="{{ route('empresas') }}"><i class="fas fa-building"></i> Empresas</a>
                        </li>
                    @endcan
                    @can('profesiones')
                        <li>
                            <a href="{{ route('profesiones') }}"><i class="fas fa-user-graduate"></i> Profesiones</a>
                        </li>
                    @endcan
                    @can('admin-vouchers')
                        <li>
                            <a href="{{ route('admin-vouchers') }}">
                                <i class="fas fa-file-alt"></i> Administrar Vouchers
                            </a>
                        </li>
                    @endcan
                    @can('admin-vouchers')
                        <li>
                            <a href="{{ route('session-voucher') }}">
                                <i class="fas fa-file-alt"></i> Voucher de Sesiones
                            </a>
                        </li>
                    @endcan
                    @can('admin-vouchers')
                        <li>
                            <a href="{{ route('filter-vouchers') }}">
                                <i class="fas fa-file-alt"></i> Filtro de Vouchers
                            </a>
                        </li>
                    @endcan
                    @can('usuarios')
                        <li>
                            <a href="{{ route('usuarios') }}"><i class="fas fa-users"></i> Usuarios</a>
                        </li>
                    @endcan
                    @can('clientes')
                        <li>
                            <a href="{{ route('clientes') }}"><i class="fas fa-users"></i> Clientes</a>
                        </li>
                    @endcan
                    @can('score.admin')
                        <li>
                            <a href="{{ route('detalleUsuario') }}">
                                <i class="far fa-credit-card"></i> Administrar Puntaje Usuario
                            </a>
                        </li>
                    @endcan
                    @can('admin-vouchers')
                        <!--<li>
                            <a href="{{ route('correoMasivo') }}">
                                <i class="fa fa-envelope" aria-hidden="true"></i> Enviar Correo Masivo
                            </a>
                        </li>-->
                    @endcan
                    <li>
                        <a href="{{ route('marcas') }}">
                            <i class="fas fa-file-alt"></i> Marcas
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('laboratorios') }}">
                            <i class="fas fa-file-alt"></i> Laboratorios
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('unidades') }}">
                            <i class="fas fa-file-alt"></i> Unidades de Medida
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('productos') }}">
                            <i class="fas fa-file-alt"></i> Productos
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('codigos') }}">
                            <i class="fas fa-file-alt"></i> Códigos
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('plantillas-inventario') }}">
                            <i class="fas fa-file-alt"></i> Plantillas de Inventario
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('inventarios') }}">
                            <i class="fas fa-file-alt"></i> Inventariado
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('consumo-inventario') }}">
                            <i class="fas fa-file-alt"></i> Consumo Inventario
                        </a>
                    </li>

                    <li>
                        <a href="{{ route('usuarios-roles') }}">
                            <i class="fas fa-file-alt"></i> Roles
                        </a>
                    </li>
            </nav>

            {{--<div class="container-fluid pt-3">--}}
            <div class="content-inner pl-4 pr-4 pt-4">
                @yield('content')
            </div>

        </div>

        <script src="{{ asset('js/app.js') }}"></script>
        <script src="{{ asset('js/app-principal.js') }}"></script>
        <!-- Latest compiled and minified JavaScript -->
        {{--@yield('script')--}}

    </body>

</html>
