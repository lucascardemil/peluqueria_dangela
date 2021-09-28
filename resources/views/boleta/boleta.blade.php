@extends('layoutBoleta')

@section('content')

    <table>
        <thead>
            <tr>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><!--<img width="100" height="40" src="https://fsymbols.com/thumbs/665.png" alt="">--></td>
                <td></td>
            </tr>
            <tr>
                <td>CÓDIGO</td>
                <td>{{ $voucher->id }}</td>
            </tr>
            <tr>
                <td>SUCURSAL</td>
                <td>{{ $voucher->sucursal->name }}</td>
            </tr>
            <tr>
                @foreach ($voucher->clientposts as $client)
                    <td>CLIENTE</td>
                    <td>{{ $client->user->name }}</td>
                @endforeach
            </tr>
            <?php $contador = 1; ?>
            <?php $descuento = 0; ?>
                @foreach ($services as $service)
                <tr>
                    <td>SERVICIO N°<?php echo $contador; ?></td>
                    <td><b>${{ number_format($service->service->price, 0, ',', '.') }}</b> ({{ $service->service->name }})</td>
                    <?php $contador = $contador + 1; ?>
                    <?php $descuento = $service->descuento; ?>
            </tr>
                @endforeach
            <!-- <tr>
                <td>SUBTOTAL</td>
                <td><b>${{ number_format($voucher->total*100/(100-$descuento), 0, ',', '.') }}</b></td>
            </tr> -->
            <tr>
                <td>DESCUENTO</td>
                <td><b>{{$descuento}}%</b></td>
            </tr>
            <tr>
                <td>METODO DE PAGO</td>
                <td><b>{{$voucher->payment}}</b></td>
            </tr>
            <tr>
                <td>TOTAL</td>
                <td><b>${{ number_format($voucher->total, 0, ',', '.') }}</b></td>
            </tr>
        </tbody>
    </table>


    <table>
        <thead>
        </thead>
        <tbody>
        </tbody>
    </table>

@endsection
