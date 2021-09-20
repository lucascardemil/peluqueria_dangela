<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <style>
            @page { size: 80mm 10mm } /* output size */
            body.receipt .sheet { width: 80mm; height: 10mm } /* sheet size */
            @media print { body.receipt { width: 80mm } } /* fix for Chrome */
            @media print { div.page-break { display: block; page-break-before: always; } }
        </style>
        <title>Dangela Voucher</title>

    </head>
    <body>
        <div class="page-break">
            @yield('content')
        </div>
    </body>
</html>
