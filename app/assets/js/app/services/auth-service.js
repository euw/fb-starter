'use strict';

var $ = require('jquery');

module.exports = function ($rootScope) {
    return {
        permissions: [],

        getLoginStatus: function() {
            var _self = this;

            FB.getLoginStatus(function (response) {
                if (response.authResponse) {
                    //fbUserId = response.authResponse.userID;
                    //token = response.authResponse.accessToken;
                    _self.getUserInfo();
                }
                else {
                    _self.login();
                }
            }, true);
        },

        getUserInfo: function () {
            var _self = this;

            FB.api('/me', function (response) {
                $rootScope.$apply(function () {
                    $rootScope.user = _self.user = response;
                });
            });

            FB.api('/me/likes', function (response) {
                $rootScope.$apply(function () {
                    _self.user.likes = response;
                });
            });
        },

        login: function(refreshPage) {
            var _self = this;

            FB.login(function (response) {
                if (response.authResponse) {
                    console.log('Welcome!  Fetching your information.... ');
                    FB.api('/me', function (response) {
                        console.log('Good to see you, ' + response.name + '.');
                    });
                    _self.getUserInfo();

                    if (refreshPage) {
                        window.location.reload();
                    }
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            }, {scope: _self.permissions.join(",")});
        },

        logout: function () {
            var _self = this;

            FB.logout(function (response) {
                $rootScope.$apply(function () {
                    $rootScope.user = _self.user = {};
                });
            });
        },

        setPermissions: function(permissions) {
            this.permissions = permissions;
        },

        checkPermissions: function() {
            var _self = this;

            FB.api("/me/permissions", function (response) {
                var permissionsGranted = [];

                angular.forEach(response.data, function (value) {
                    if (value.status == 'granted') {
                        permissionsGranted.push(value.permission);
                    }
                });

                var permissionsToPromptFor = $(_self.permissions).not(permissionsGranted).get();

                if (permissionsToPromptFor.length > 0) {
                    _self.promptForPermissions(permissionsToPromptFor);
                }
            });
        },

        promptForPermissions: function(permissions) {
            var _self = this;

            FB.login(function (response) {
                _self.getUserInfo();
            }, {scope: permissions.join(',')});
        },

        promptForPermission: function (permission) {
            var _self = this;

            FB.login(function (response) {
                _self.getUserInfo();
            }, {scope: permission});
        }
    };
};