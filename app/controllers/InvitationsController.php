<?php

use Euw\FacebookApp\Modules\Requests\Repositories\RequestRepository;

class InvitationsController extends BaseController {

    protected $request;

    function __construct(RequestRepository $request)
    {
        parent::__construct();
        $this->request = $request;
    }

    public function store()
    {
        $request = $this->request->create(Input::all());

//        $request = $this->request->create(Input::all());
//        $request->tenant()->save($this->tenant->id);

        // Todo: save invitation
//         $user = User::where('fb_id', '=', Input::get('uid')->first());
        // foreach user in 'to' as recipient
        // find user with repipient->id
        // or create new user with fb_id = recipient->id, pending 1 // set pending 0, when user authenticates app

        return Response::json(['data' => $request]);
    }

} 