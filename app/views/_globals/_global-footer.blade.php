@section('footer')

<div class="container">
    <hr/>
    @include('_globals._global-footer-navigation')

    @include('_partials._modal', ['modalClass' => 'modal-auth', 'title' => 'Bitte erlaube der App Zugriff auf deine Daten.', 'body' => 'Unsere Apps verwenden ausschließlich die für die Funktionalität absolut notwendigen Daten und Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid, at aut beatae corporis cumque cupiditate eligendi ex excepturi exercitationem facilis mollitia, nisi nostrum odio quaerat qui, repudiandae sequi vero?' ])
</div>

@stop