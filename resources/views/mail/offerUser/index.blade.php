@component('mail::layout')
    {{-- Header --}}
    @slot('header')
        @component('mail::header', ['url' => config('app.url')])
            Dangela Web
        @endcomponent
    @endslot
    {{-- Body --}}
        Felicidades señor(a): {{ $user->name }}. Usted ha obtenido un descuento de un {{ $percentage }}% con fecha límite de {{ $date }}
    {{-- Subcopy --}}
    @isset($subcopy)
        @slot('subcopy')
            @component('mail::subcopy')
                {{ $subcopy }}
            @endcomponent
        @endslot
    @endisset
{{-- Footer --}}
    @slot('footer')
        @component('mail::footer')
            <a href="http://dangela.cl" style="text-align:center"><img src="http://www.dangela.cl/wp-content/uploads/2018/05/logo_dangelablanco_nombre.png" width="200" height="80"></a>
            <br>
            © {{ date('Y') }} {{ config('app.name') }}.Todos los derechos reservados
        @endcomponent
    @endslot
@endcomponent
