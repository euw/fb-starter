<?php namespace Euw\FacebookApp\Modules\Providers;

use Illuminate\Support\ServiceProvider;

class ModuleProvider extends ServiceProvider
{

    /**
     * Register
     */
    public function register()
    {
//        $this->registerInvitationRepository();
    }

    /**
     * Register Text Repository
     */
    public function registerInvitationRepository()
    {
        $this->app->bind('Euw\FacebookApp\Modules\Invitations\Repositories\InvitationRepository', function ($app) {
            return new EloquentInvitationRepository(new Invitation, $app['context']);
        });
    }

}