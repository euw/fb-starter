<?php

use Euw\FacebookApp\Modules\Users\Repositories\UserRepository;

class UsersController extends BaseController {

    protected $user;

    function __construct(UserRepository $user)
    {
        parent::__construct();
        $this->user = $user;
    }

    public function store()
    {
        // if the user exists, return it
        $user = $this->user->getFirstBy('fb_id', Input::get('id'));

        if ( ! $user) {
            $user = $this->user->create(array_merge(Input::all(), [
                'fb_id' => Input::get('id')
            ]));
        }

        return Response::json(['data' => $user]);
    }

} 