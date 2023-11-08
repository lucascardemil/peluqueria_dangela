<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Peluquería Dangela - Registro de clientes</title>

    <link rel="stylesheet" href="{{ asset('css/app-principal.css') }}">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>

<body class="body-register-client">
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-md-6 mx-auto">
                    <div class="card mt-5">
                        <div class="card-body">
                            <h5 class="card-title">Registro de clientes</h5>
                            <register-client-component></register-client-component>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/app-principal.js') }}"></script>
</body>

</html>
