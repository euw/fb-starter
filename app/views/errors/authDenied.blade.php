@extends('facebook-app::layouts.master')

@section('content')
<h1>Please :(</h1>

<p><button ng-disabled="!initialized" ng-click="login(true)" class="btn
btn-primary">Login</button></p>
@stop