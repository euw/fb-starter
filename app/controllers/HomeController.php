<?php

class HomeController extends ViewController {

	public function index()
	{
        return View::make('home.index');
	}

    public function conditions()
    {
        return View::make('home.conditions');
    }

}
