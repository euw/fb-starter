<?php

use Euw\FacebookApp\Modules\Texts\Repositories\TextRepository;

class ViewController extends BaseController {

    public function __construct(TextRepository $text)
    {
        parent::__construct();
        View::share('texts', $text->all()->first());
    }

} 