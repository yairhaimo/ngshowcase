(function () {
    'use strict';
    var page = angular.module('ngShowcase.pages.details');

    page.controller('DetailsController', function ($scope, Item, selectedItem) {
        $scope.item = selectedItem;
    });
}());