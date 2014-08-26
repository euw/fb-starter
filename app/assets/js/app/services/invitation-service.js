'use strict';

module.exports = function ($rootScope, $window, $http, authService) {
    return {
        invite: function () {
            FB.ui({
                method: 'apprequests',
                message: 'YOUR_MESSAGE_HERE',
                to: '100002399508987'
            }, function (response) {
                if (response && response.request && response.to) {
                    var user_ids = [];

                    angular.forEach(response.to, function(value, key) {
                        user_ids.push(value);
                    });

                    var data = {
                        uid: $rootScope.user.id,
                        to: user_ids,
                        request_id: response.request,
                        pageId: $window.pageId
                    };

                    $http.post('/invitations', data).
                        success(function (data, status, headers, config) {
                            //console.log("success");
                            console.log(data);
                        }).
                        error(function (data, status, headers, config) {
                            console.log("error");
                            console.log(data);
                        });

                } else {
                    // Canceled sending the request
                }
            });
        }
    };
};