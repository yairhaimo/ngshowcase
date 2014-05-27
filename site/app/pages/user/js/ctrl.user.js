(function () {
    'use strict';
    var page = angular.module('ngShowcase.pages.user');

    page.controller('UserController', function ($scope, SelectedUser) {
        $scope.data = {
            user: SelectedUser
        };
    });
}());