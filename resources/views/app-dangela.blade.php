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
    <nav class="navbar navbar-expand-lg bg-navbar">
        <div class="container">
            <a class="navbar-brand" href="{{ url('/') }}">
                {{-- config('app.name', 'Laravel') --}}
                <img width="100" height="40" src="{{ asset('img/logo_blanco_nombre.png') }}" alt="">
            </a>
            <a id="toggle-btn" href="#" class="menu-btn active"><span></span><span></span><span></span></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto">
                    @can('inicio')
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('home') }}">Resumen</a>
                        </li>
                    @endcan
                    @can('sistema-post')
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('sistema-post') }}">Sistema POS</a>
                        </li>
                    @endcan
                    @can('buscar-voucher')
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('buscar-voucher') }}">Voucher emitidos</a>
                        </li>
                    @endcan
                    @can('detail-user')
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('detail-user') }}">Puntos Clientes</a>
                        </li>
                    @endcan

                    @can('inventario')
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('inventario') }}">Inventario</a>
                        </li>
                    @endcan

                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                    <!-- Authentication Links -->
                    @guest
                        <li class="nav-item">
                            <a class="nav-link"
                                href="{{ route('login', ['key' => Auth::user()->key]) }}">{{ __('Login') }}</a>
                        </li>
                    @else
                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                {{ Auth::user()->name }}
                            </a>

                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#"
                                    onclick="event.preventDefault();
                                                        document.getElementById('logout-form').submit();">
                                    {{ __('Cerrar Sesión') }}
                                </a>

                                <form id="logout-form" action="{{ route('logout', ['key' => Auth::user()->key]) }}"
                                    method="POST" style="display: none;">
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
                @can('inicio')
                    <li>
                        <a href="{{ route('home') }}"><i class="fas fa-home"></i> Inicio</a>
                    </li>
                @endcan
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
                @can('session-voucher')
                    <li>
                        <a href="{{ route('session-voucher') }}">
                            <i class="fas fa-file-alt"></i> Servicios por sesiones
                        </a>
                    </li>
                @endcan
                @can('personales')
                    <li>
                        <a href="{{ route('personales') }}"><i class="fas fa-user-tie"></i> Personal</a>
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
                @can('clientes')
                    <li>
                        <a href="{{ route('clientes') }}"><i class="fas fa-users"></i> Clientes</a>
                    </li>
                @endcan
                @can('usuarios')
                    <li>
                        <a href="{{ route('usuarios') }}"><i class="fas fa-users"></i> Listado de usuarios</a>
                    </li>
                @endcan
                @can('role')
                    <li>
                        <a href="{{ route('role') }}">
                            <i class="fas fa-file-alt"></i> Roles
                        </a>
                    </li>
                @endcan
                @can('usuarios-roles')
                    <li>
                        <a href="{{ route('usuarios-roles') }}">
                            <i class="fas fa-file-alt"></i> Roles a usuarios
                        </a>
                    </li>
                @endcan
                @can('mis-puntos')
                    <li>
                        <a href="{{ route('mis-puntos') }}">
                            <i class="far fa-credit-card"></i> Mis puntos
                        </a>
                    </li>
                @endcan
                @can('canje-puntos')
                    <li>
                        <a href="{{ route('canje-puntos') }}">
                            <i class="far fa-credit-card"></i> Canje de puntos
                        </a>
                    </li>
                @endcan
                @can('productos')
                    <li>
                        <a href="{{ route('productos') }}">
                            <i class="fas fa-dolly-flatbed"></i> Productos
                        </a>
                    </li>
                @endcan
                @can('lista-precios')
                    <li>
                        <a href="{{ route('lista-precios') }}">
                            <i class="fas fa-dolly-flatbed"></i> Lista de Precios
                        </a>
                    </li>
                @endcan
                @can('proveedores')
                    <li>
                        <a href="{{ route('proveedores') }}">
                            <i class="fas fa-building"></i> Proveedores
                        </a>
                    </li>
                @endcan
                @can('ventas')
                    <li>
                        <a href="{{ route('ventas') }}">
                            <i class="fas fa-shopping-cart"></i> Ventas
                        </a>
                    </li>
                @endcan
                @can('formas-pagos')
                    <li>
                        <a href="{{ route('formas-pagos') }}">
                            <i class="fas fa-money-bill-wave"></i> Formas de Pagos
                        </a>
                    </li>
                @endcan
                {{-- @can('admin-vouchers')
                    <li>
                        <a href="{{ route('admin-vouchers') }}">
                            <i class="fas fa-file-alt"></i> Administrar Vouchers
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
                        <i class="fas fa-file-alt"></i> Roles a usuarios
                    </a>
                </li> --}}
        </nav>
        <div class="content-inner pl-4 pr-4 pt-4">
            @yield('content')
        </div>

    </div>

    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/app-principal.js') }}"></script>

</body>

</html>
