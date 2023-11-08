@extends('app-dangela')

@section('content')

    <div class="row">
        <div id="app" class="col-lg-12">
            <div class="text-center mt-2">
                <img src="{{ asset('img/logo_nombre.png') }}"  width="120" height="50" alt="">
            </div>
            <index-component></index-component>
        </div>
    </div>

@endsection
