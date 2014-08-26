<?php

Route::group(array('before' => 'multi-tenancy.selectTenant|facebook-app.auth'), function () {

    Route::any('/', 'HomeController@index');

    Route::get('teilnahmebedingungen', 'HomeController@conditions');

    Route::post('users', 'UsersController@store');
    Route::post('invitations', 'InvitationsController@store');
});