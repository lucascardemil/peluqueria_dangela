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

{{--@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    You are logged in!
                </div>
            </div>
        </div>
    </div>
</div>
@endsection--}}
