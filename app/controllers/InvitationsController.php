<?php

use Euw\FacebookApp\Modules\Invitations\Repositories\InvitationRepository;
use Euw\FacebookApp\Modules\Requests\Repositories\RequestRepository;
use Euw\FacebookApp\Modules\Users\Repositories\UserRepository;

class InvitationsController extends BaseController {

    protected $request;
    protected $invitation;
    protected $user;

    function __construct(RequestRepository $request, InvitationRepository $invitation, UserRepository $user)
    {
        parent::__construct();
        $this->request = $request;
        $this->invitation = $invitation;
        $this->user = $user;
    }

    public function store()
    {
        $request = $this->request->create(Input::all());

        $uid = $this->facebook->getUser();

        $sender = $this->user->getFirstBy('fb_id', $uid);

        if (! $sender) {
            $userInfo = $this->facebook->api('/' . $uid);

            $sender = $this->user->create(array_merge($userInfo, [
                'fb_id' => $uid
            ]));
        }

        foreach (Input::get('to') as $to) {

            $recipient = $this->user->getFirstBy('fb_id', $to);

            if ( ! $recipient) {
                $recipient = $this->user->create([
                    'fb_id' => $to
                ]);
            }

            $this->invitation->create(array_merge(Input::all(), [
                'sender_id'    => $sender->id,
                'recipient_id' => $recipient->id,
                'request_id'   => $request->id
            ]));
        }

        return Response::json(['data' => $request]);
    }

} 