(function () {
    'use strict';
    var browser = angular.module('ngShowcase.browser', ['ngShowcase.data']);

    browser.factory('Browser', function (Item, $q) {
        var _items = [];
        return {
            search: function (query, itemType) {
                var d = $q.defer();
                var search = { q: query, type: itemType };
                Item.query(search, function (data) {
                    angular.copy(data, _items);
                    d.resolve(data);
                });

                return d.promise;
            },
            items: _items

        };
    });

}());
