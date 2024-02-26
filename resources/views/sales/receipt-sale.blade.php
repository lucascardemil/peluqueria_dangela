@extends('layoutReceiptSale')

@section('content')
    <table>
        <tbody>
            <tr>
                <td colspan="2" style="border: 0px; padding-bottom: 10px;"><b>Dangela</b>
                </td>
            </tr>
            @foreach ($sales as $sale)
                <tr>
                    <td style="border: 0px;"><b>Recibo</b></td>
                    <td style="border: 0px;">{{ $sale->id }}</td>
                </tr>
                <tr>
                    <td style="border: 0px;"><b>Direccion</b></td>
                    <td style="border: 0px;">Buen Pastor 103, Coquimbo, Chile</td>
                </tr>

                <tr>
                    <td style="border: 0px;"><b>Telefono</b></td>
                    <td style="border: 0px;">(51) 248 6821</td>
                </tr>

                <tr>
                    <td style="border: 0px;"><b>Fecha</b></td>
                    <td style="border: 0px;">{{ $sale->updated_at }}</td>
                </tr>

                <tr>
                    <td style="border: 0px;"><b>Empleado</b></td>
                    <td style="border: 0px;">{{ $sale['user']->name }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
    <hr style="margin-bottom: 5px; margin-top: 5px;">
    <table>
        <tbody>
            <?php $totalServicio = 0; ?>
            @foreach ($sales[0]['productSales'] as $productSale)
                <tr>
                    <td style="border: 0px;" colspan="2">{{ $productSale['product']->name }}</td>
                </tr>
                <tr>
                    <td style="border: 0px;">{{ $productSale->quantity }} X ${{ $productSale->total / $productSale->quantity }}
                    </td>
                    <td style="border: 0px;" width="50px"></td>
                    <td style="border: 0px;" width="50px">${{ $productSale->total }}</td>
                </tr>
                <?php $totalServicio += $productSale->total; ?>
            @endforeach
        </tbody>
    </table>
    <hr>

    <table>
        <tbody>
            <tr>
                <th style="border: 0px;">TOTAL</th>
                <td style="border: 0px;" width="50px"></td>
                <th style="border: 0px;" width="50px">${{ number_format($totalServicio, 0, ',', '.') }}</th>
            </tr>
        </tbody>
    </table>
@endsection
