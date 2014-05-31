(function () {
    'use strict';
    var page = angular.module('ngShowcase.pages.browse');

    page.controller('BrowseController', function ($scope, Item, $location, Browser) {
        $scope.data = {
            filters: Browser.filters,
            items: Browser.items
        };

        $scope.nextPage = Browser.nextPage;
        $scope.previousPage = Browser.previousPage;

        //var search = $location.search();
        //Browser.search(search.q, search.type).then(function (res) {
        //});
        Browser.search().then(function (res) {
        });

    });
}());