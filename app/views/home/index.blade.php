@extends('facebook-app::layouts.master')

@section('header')
<div class="container">
<h1>Header</h1>
</div>
@stop

@section('content')
    <div ng-show="user.id">
        <h1>@{{ user.name }} <small>@{{ user.id }}</small></h1>

        <h3>Likes</h3>
        <ul>
            <li ng-repeat="like in user.likes.data">
                @{{like.name}}
            </li>
            <li ng-if="user.likes.data.length == 0">
                <strong>No likes found...</strong>
                <p><a href="" ng-click="promptForPermission('user_likes')" class="btn btn-primary">Ask for permission</a></p>
            </li>
        </ul>

        <hr/>

        <p><button ng-click="invite()" class="btn btn-primary">Invite Friends</button></p>
    </div>

    <div ng-show="!user.id">
        <p><button ng-disabled="!initialized" ng-click="login()" class="btn btn-primary">Login</button></p>
    </div>
@stop

@section('footer')
<div class="container">
<h6>Footer</h6>
</div>
@stop