(function () {
    'use strict';
    var page = angular.module('ngShowcase.pages.details');

    page.controller('DetailsController', function ($scope, $window, Configuration, SelectedItem, $location) {

        function init() {
            $scope.data = {
                item: SelectedItem
            };
            $scope.Configuration = Configuration;
            /// for disqus
            $scope.url = $location.absUrl();
            
            /// trigger loading for iframe content
            $scope.data.isLoading = true;

            /// IFrame onload callback
            $window.finishedLoadingPlunker = function () {
                $scope.$apply(function () {
                    /// turn off loading flag
                    $scope.data.isLoading = false;
                });
            };
        }
        init();
    });
}());