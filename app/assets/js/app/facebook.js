'use strict';

var config = require('./config')();

module.exports = function($rootScope, $window, authService) {

    $rootScope.user = {};
    $rootScope.initialized = false;

    authService.setPermissions(config.permissions);

    $window.fbAsyncInit = function () {
        // Executed when the SDK is loaded

        FB.init({
            appId: config.appId, // App ID
            channelUrl: config.channelUrl, // Channel File
            status: true, // check login status
            cookie: true, // enable cookies to allow the server to access the session
            xfbml: true  // parse XFBML
        });

        FB.Canvas.setAutoGrow();
        FB.Canvas.scrollTo(0, 0);

        var container = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            FB.Canvas.setSize({height: container.clientHeight});
        }, 91); // Paul's favourite number

        $rootScope.$apply(function () {
            $rootScope.initialized = true;
        });

        authService.getLoginStatus();

    };

    (function (d) {
        var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement('script');
        js.id = id;
        js.async = true;
        js.src = "//connect.facebook.net/en_US/all.js";
        ref.parentNode.insertBefore(js, ref);
    }(document));

};