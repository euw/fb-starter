@extends('facebook-app::layouts.master')

@include('_globals._global-header')

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

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="" ng-click="invite()">Animi</a> aperiam assumenda aut dolor dolores ducimus, eos facilis id in iste necessitatibus neque nesciunt non odit pariatur quia quibusdam ratione, voluptatum.</p>

        <p><fb-invite label="Freunde einladen"></fb-invite></p>
    </div>

    <div ng-show="!user.id">
        <p><fb-login label="Anmelden"></fb-login></p>
    </div>
@stop

@include('_globals._global-footer')