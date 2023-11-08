@extends('layoutBoletaPDF')

@section('content')

    <table class="table table-hover table-striped">
        <thead>
            <tr>
                <th>Cont.</th>
                <th>Nombre</th>
                <th>Método de Pago</th>
                <th>Fecha</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            <?php $contador = 1; ?>
            <?php $total = 0; ?>
            @foreach ($voucher as $vou)
            <tr>
                <td><?php echo $contador; ?></td>
                <td>{{ $vou->name }}</td>
                <td>{{ $vou->payment }}</td>
                <td>{{ $vou->created_at }}</td>
                <td>{{ '$'.number_format($vou->total, 0, ',', '.') }}</td>
            </tr>
            <?php $contador = $contador + 1; ?>
            <?php $total = $total + $vou->total; ?>
            @endforeach
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>Total</td>
                <td><?php echo '$'.number_format($total, 0, ',', '.'); ?></td>
            </tr>
        </tbody>
    </table>

@endsection
