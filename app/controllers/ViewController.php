<?php

use Euw\FacebookApp\Modules\Texts\Repositories\TextRepository;
use Euw\FacebookApp\Modules\Texts\Models\Text;

class ViewController extends BaseController
{

    public function __construct(TextRepository $text)
    {
        parent::__construct();

        $texts = $text->all()->first();

        if ( ! $texts) {
            $texts = new Text;
        }

        View::share('texts', $texts);
    }

} 