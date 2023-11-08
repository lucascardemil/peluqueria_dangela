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
            @foreach ($voucher->clientposts as $client)
                <tr>
                    <td>CLIENTE</td>
                    <td>{{ $client->user->name }}</td>
                </tr>
            @endforeach
            <?php $contador = 1; ?>
            <?php $descuento = 0; ?>
            @if (empty($arrayService) != true)
                @foreach ($arrayService as $service)
                    <tr>
                        <td>SERVICIO N°<?php echo $contador; ?></td>
                        <td>
                            <b>${{ number_format($service['service']->price, 0, ',', '.') }}</b>
                            ({{ $service['service']->name }})
                        </td>
                        <?php $contador = $contador + 1; ?>
                        <?php $descuento = isset($service['service']->descuento) ? $service['service']->descuento : 0; ?>
                    </tr>
                @endforeach
                {{-- <tr>
                    <td>SUBTOTAL</td>
                    <td><b>${{ number_format(($voucher->total * 100) / (100 - $descuento), 0, ',', '.') }}</b></td>
                </tr> --}}
                <tr>
                    <td>DESCUENTO</td>
                    @if ($service['service']->is_promotion > 0)
                        <td><b>0</b></td>
                    @else
                        <td><b>{{ $descuento }}%</b></td>
                    @endif
                </tr>
            @endif
            <tr>
                <td>METODO DE PAGO</td>
                <td><b>{{ $voucher->payment }}</b></td>
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
