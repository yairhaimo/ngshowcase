(function () {
    'use strict';
    var browser = angular.module('ngShowcase.browser', ['ngShowcase.data']);

    browser.factory('Browser', function (Item, $q) {
        var PAGE_SIZE = 9;
        var _items = [];
        var _filters = {
            control: true,
            module: true,
            behavior: true
        };
        var _currentPage = 0;

        var _search = function (query, itemType) {
            var d = $q.defer();
            var search = { q: query, type: itemType, from: _currentPage, amount: PAGE_SIZE };
            Item.query(search, function (data) {
                angular.copy(data, _items);
                d.resolve(data);
            });

            return d.promise;
        };

        var _nextPage = function () {
            _currentPage += PAGE_SIZE;
            _search();
        };
        var _previousPage = function () {
            _currentPage -= PAGE_SIZE;
            _search();
        };

        return {
            search: _search,
            items: _items,
            filters: _filters,
            nextPage: _nextPage,
            previousPage: _previousPage

        };
    });

}());
