<?php

use Euw\FacebookApp\Modules\Users\Repositories\UserRepository;

class UsersController extends BaseController {

    protected $user;

    function __construct(UserRepository $user)
    {
        $this->user = $user;
    }

    public function store()
    {
        $uid = Input::get('id');

        $user = $this->user->getFirstBy('fb_id', $uid);

        if (!$user) {
            $user = $this->user->create(array_merge(Input::all(), [
                'fb_id' => $uid
            ]));
        }

        return Response::json(['data' => $user]);
    }

} 