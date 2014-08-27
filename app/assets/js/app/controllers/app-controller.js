'use strict';

module.exports = function($scope, authService, invitationService) {

    $scope.login = function (refreshPage) {
        authService.login(refreshPage);
    };

    $scope.logout = function () {
        authService.logout();
    };

    $scope.invite = function(message) {
        invitationService.invite(message);
    };

    $scope.promptForPermission = function (permission) {
        authService.promptForPermission(permission);
    };

};