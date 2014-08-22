<?php

Route::group(array('before' => 'multi-tenancy.selectTenant|facebook-app.auth'), function () {

    Route::any('/', 'HomeController@index');

//    Route::any('/', array('as' => 'home', 'uses' => 'Euw\MyApp\Controllers\HomeController@index'));
//    Route::get('teilnahmebedingungen', array('as' => 'terms_of_use', 'uses' => 'TermsOfUseController@index'));

//    Route::resource('service', 'ServiceRequestsController');
//
//    Route::resource('cars', 'CarsController');
//    Route::resource('cars.votes', 'CarVotesController');
//    Route::resource('cars.comments', 'CarCommentsController');
//    Route::get('highscore', array('as' => 'highscore', 'uses' => 'CarsController@highscore'));
//    Route::post('cars/invitations', 'InvitationsController@store');
});