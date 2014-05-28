(function () {
    'use strict';
    var page = angular.module('ngShowcase.pages.home');

    page.controller('HomeController', function ($scope, Item) {
        $scope.data = {};

        Item.query({type: 'control'}, function(data) {
            $scope.data.controls = data;
        });

        Item.query({ type: 'module' }, function (data) {
            $scope.data.modules = data;
        });

        Item.query({ type: 'behavior' }, function (data) {
            $scope.data.behaviors = data;
        });

    });
}());