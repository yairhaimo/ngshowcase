(function () {
    'use strict';
    var page = angular.module('ngShowcase.pages.browse');

    page.controller('BrowseController', function ($scope, Item) {
        Item.query(function (data) {
            $scope.items = data;
        });
    });
}());