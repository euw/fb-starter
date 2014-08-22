'use strict';

module.exports = function($scope, authService, invitationService) {

    $scope.login = function () {
        authService.login();
    };

    $scope.logout = function () {
        authService.logout();
    };

    $scope.invite = function() {
        invitationService.invite();
    };

    $scope.promptForPermission = function (permission) {
        authService.promptForPermission(permission);
    };

};