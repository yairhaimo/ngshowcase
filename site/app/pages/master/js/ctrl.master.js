(function () {
    'use strict';
    var page = angular.module('ngShowcase.pages.master');

    page.controller('MasterController', function ($scope, $location, $state, $stateParams, Browser, ItemType) {
        $scope.data = {};

        ItemType.query(function (data) {
            $scope.data.itemTypes = data;
        });


        /// TODO: refactor

        /// clear query params and go to browse
        $scope.navigateHome = function () {
            //$location.search({ 'q': null, 'type': null });
            //debugger;
            //var u = $location.url();
            //var p = $location.path();
            //var s = $location.search();
            $scope.searchTerm = '';
            $location.url($location.path());
            $state.go('master.browse');
            Browser.search();
        };

        /// set query param to type
        $scope.filterByType = function (type) {
            /// reset search when switching filter types
            $scope.searchTerm = '';
            /// go to browse
            $state.go('master.browse');
            /// set query parameter
            $location.search({ 'type': type });
            /// trigger search
            Browser.search(undefined, type);
        };

        /// append search query param to type
        $scope.search = function () {
            /// get query param type if defined
            var type = $location.search().type;
            var search = {
                q: $scope.searchTerm
            };
            /// add type to object if defined
            if (type) {
                search.type = type;
            }
            $state.go('master.browse');
            /// set query parameters
            $location.search(search);
            /// trigger search
            Browser.search(search.q, search.type);
        };
    });
}());