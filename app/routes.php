<?php

Route::group(array('before' => 'selectTenant|facebook-app.auth'), function () {
    /*View::composer('facebook-app::layouts.master', function ($view) {
        $context = App::make('Euw\MultiTenancy\Contexts\Context');

        try {
            $tenant = $context->getOrThrowException();
            $view->with('pageId', $tenant->fb_page_id);
        } catch (\Euw\MultiTenancy\Exceptions\TenantNotFoundException $e) {
            dd($e->getMessage());
        }

    });*/

    Route::any('/', function () {
        return View::make('home.index');
    });


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