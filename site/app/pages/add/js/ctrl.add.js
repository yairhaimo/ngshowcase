(function () {
    'use strict';
    var page = angular.module('ngShowcase.pages.add');

    page.controller('AddController', function ($scope, Item) {
        $scope.item = new Item();
    });
}());