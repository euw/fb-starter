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
        $uid = $this->facebook->getUser();

        $user = $this->user->getFirstBy('fb_id', $uid);

        if (!$user) {
            $userInfo = $this->facebook->api('/' . $uid);

            $user = $this->user->create(array_merge($userInfo, [
                'fb_id' => $uid
            ]));
        }

        return Response::json(['data' => $user]);
    }

} 