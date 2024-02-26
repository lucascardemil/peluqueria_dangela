@extends('layoutBoxClosureZ')

@section('content')
    <table>
        <tbody>
            <tr>
                <td colspan="2" style="border: 0px; padding-bottom: 10px;"><b>Dangela</b>
                </td>
            </tr>

            <tr>
                <td style="border: 0px;" width="200px"><b>Direccion</b></td>
                <td style="border: 0px;">Buen Pastor 103, Coquimbo, Chile</td>
            </tr>

            <tr>
                <td style="border: 0px;"><b>Telefono</b></td>
                <td style="border: 0px;">(51) 248 6821</td>
            </tr>

            <tr>
                <td style="border: 0px;"><b>Fecha</b></td>
                <td style="border: 0px;">{{ $sales[0]->updated_at }}</td>
            </tr>

            <tr>
                <td style="border: 0px;"><b>Empleado</b></td>
                <td style="border: 0px;">{{ $sales[0]['user']->name }}</td>
            </tr>

        </tbody>
    </table>
    <hr style="margin-bottom: 5px; margin-top: 5px;">
    <table>
        <tbody>
            <?php $totalServicio = 0; ?>
            @foreach ($sales as $sale)
                @foreach ($sale['productSales'] as $productSale)
                    <tr>
                        <td style="border: 0px;" colspan="2">{{ $productSale['product']->name }}</td>
                    </tr>
                    <tr>
                        <td style="border: 0px;" width="600px">{{ $productSale->quantity }} X
                            ${{ number_format($productSale->total / $productSale->quantity, 0, ',', '.') }}
                        </td>
                        <td style="border: 0px;">${{ number_format($productSale->total, 0, ',', '.') }}</td>
                    </tr>
                    <?php $totalServicio += $productSale->total; ?>
                @endforeach
            @endforeach
        </tbody>
    </table>
    <hr>

    <table>
        <tbody>
            <tr>
                <th style="border: 0px;" width="600px">TOTAL</th>
                <th style="border: 0px;">${{ number_format($totalServicio, 0, ',', '.') }}</th>
            </tr>
        </tbody>
    </table>
@endsection
