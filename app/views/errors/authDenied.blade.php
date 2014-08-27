@extends('facebook-app::layouts.master')

@section('content')
<h1>Bitte :(</h1>

<p class="lead">Wir brauchen Zugriff auf deine Daten, weil …</p>

<p><fb-login redirect="true" label="Ok, habe ich verstanden."></fb-login></p>
@stop