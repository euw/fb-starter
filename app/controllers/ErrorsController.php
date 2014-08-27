<?php

class ErrorsController extends Controller {

    public function __construct()
    {
        JavaScript::put([
            'appId'       => Config::get('facebook-app::appId'),
            'channelUrl'  => Config::get('facebook-app::channelUrl'),
            'permissions' => Config::get('facebook-app::scope')
        ]);
    }

    public function authDenied($code = null)
    {
        JavaScript::put([
            'preventRedirect' => true
        ]);

        return View::make('errors.authDenied');
    }

    public function tenantNotFound($code = null)
    {
        return View::make('errors.tenantNotFound');
    }

	public function genericApp($code = null)
	{
        return View::make('errors.genericApp');
	}


}
