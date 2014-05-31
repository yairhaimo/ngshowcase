(function () {
    'use strict';
    var page = angular.module('ngShowcase.pages.browse');

    page.filter('typefilter', function () {
        return function (items, filters) {
            var filteredItems = [];

            angular.forEach(items, function (item) {
                if (filters[item.Type.Name]) {
                    filteredItems.push(item);
                }
            });

            return filteredItems;
        };
    });
}());