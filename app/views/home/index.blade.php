@extends('facebook-app::layouts.master')

@include('_globals._global-header')

@section('content')
    <div ng-show="user.id">
        <h3>@{{ user.name }} <small>@{{ user.id }}</small></h3>

        <p><fb-invite label="Freunde einladen"></fb-invite></p>
    </div>

    <div ng-show="!user.id">
        <p><fb-login label="Anmelden"></fb-login></p>
    </div>
@stop

@include('_globals._global-footer')