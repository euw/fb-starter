'use strict';

module.exports = function ($rootScope, $http, authService) {
    return {
        invite: function () {
            FB.ui({
                method: 'apprequests',
                message: 'YOUR_MESSAGE_HERE'
            }, function (response) {
                if (response && response.request && response.to) {
                    var user_ids = [];

                    angular.forEach(response.to, function(value, key) {
                        user_ids.push(value);
                    });

                    // todo: save to database

                    /*var invitation = new Invitation({
                        uid: self.model.get("fb_id"),
                        to: user_ids,
                        requestId: response.request,
                        pageId: appConfig.pageId
                    });

                    invitation.save(null, {
                        success: function (model, response) {
                            *//*							console.log("success");
                             console.log(model);
                             console.log(response);*//*
                        },
                        error: function (model, response) {
                            *//*							console.log("error");
                             console.log(model);
                             console.log(response);*//*
                        }
                    });*/

                } else {
                    // Canceled sending the request
                }
            });
        }
    };
};