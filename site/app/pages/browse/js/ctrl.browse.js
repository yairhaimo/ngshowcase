(function () {
    'use strict';
    var page = angular.module('ngShowcase.pages.browse');

    page.controller('BrowseController', function ($scope, Item, ItemType, $location, Browser) {
        $scope.data = {
            items: Browser.items
        };

        var search = $location.search();
        Browser.search(search.q, search.type).then(function (res) {
        });

        ItemType.query(function (data) {
            $scope.data.itemTypes = data;
        });
    });
}());