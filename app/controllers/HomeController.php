<?php

class HomeController extends BaseController {

	public function index()
	{
        return View::make('home.index');
	}

    public function conditions()
    {
        return View::make('home.conditions');
    }

}
