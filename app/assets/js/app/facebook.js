'use strict';

var MobileDetect = require('mobile-detect');

module.exports = function($rootScope, $window, authService) {

    $rootScope.user = {};
    $rootScope.initialized = false;

    authService.setPermissions($window.permissions);

    function NotInFacebookFrame() {
        return top === self;
    }

    function ReferrerIsFacebookApp() {
        if (document.referrer) {
            return document.referrer.indexOf("apps.facebook.com") != -1;
        }
        return false;
    }

    if (NotInFacebookFrame() || ReferrerIsFacebookApp()) {
        var md = new MobileDetect($window.navigator.userAgent);

        if (!md.mobile() && $window.pageId) {
            top.location.href = 'https://www.facebook.com/' + $window.pageId + '/?sk=app_' + $window.appId;
        }
    }

    $window.fbAsyncInit = function () {
        // Executed when the SDK is loaded

        FB.init({
            appId: $window.appId, // App ID
            channelUrl: $window.channelUrl, // Channel File
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

        FB.Event.subscribe('edge.create', function (response) {
            //top.location.reload();
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