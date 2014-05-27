(function () {
    'use strict';
    var page = angular.module('ngShowcase.pages.browse');

    page.controller('BrowseController', function ($scope, Item, ItemType, Items, ItemTypes) {
        $scope.data = {
            items: Items,
            itemTypes: ItemTypes
        };

        //ItemType.query(function (data) {
        //    $scope.data.itemTypes = data;
        //});

        

        //Item.query(function (data) {
        //    $scope.data.items = data;
        //});

        //$scope.filter = function (itemType) {
        //    Item.query({ItemType: itemType.Name}, function (data) {
        //        $scope.data.items = data;
        //    });
        //};
    });
}());