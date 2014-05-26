(function () {
    'use strict';
    var page = angular.module('ngShowcase.pages.details');

    page.controller('DetailsController', function ($scope, Item, $stateParams, $sce, $window) {
        Item.get({ Id: $stateParams.id }, function (data) {
            $scope.item = data;
            $scope.loading = true;
        });

        $scope.trustSrc = function (src) {
            return $sce.trustAsResourceUrl(src);
        };

        $window.finishedLoadingPlunker = function () {
            $scope.$apply(function () {
                $scope.loading = false;
            });
        };


    });

    
}());