'use strict';

module.exports = function($rootScope, $http) {

    return {
        saveToDatabase: function () {
            var data = $rootScope.user;

            $http.post('/users', data).
                success(function (data, status, headers, config) {
                    //console.log("success");
                    //console.log(data);
                }).
                error(function (data, status, headers, config) {
                    //console.log("error");
                    //console.log(data);
                });

        }
    }

};