(function () {
    'use strict';
    var page = angular.module('ngShowcase.pages.details');

    page.controller('DetailsController', function ($scope, Item, Comment, $stateParams, $sce, $window, Configuration) {

        $scope.postComment = function () {
            debugger;
            $scope.newComment.User = { Id: $scope.Auth.user.id, Name: $scope.Auth.user.displayName };
            $scope.newComment.Date = new Date();
            $scope.newComment.$save({ ItemId: $scope.data.item.Id }, function () {
                $scope.data.item.Comments.push($scope.newComment);
            });
            
        };

        function init() {
            $scope.newComment = new Comment();
            $scope.data = {};
            $scope.Configuration = Configuration;

            /// load the item according to the stateParams
            Item.get({ Id: $stateParams.id }, function (data) {
                $scope.data.item = data;
                $scope.data.PlnkrUrl = $sce.trustAsResourceUrl(Configuration.plnkrRunUrl + $scope.data.item.PlnkrId);
                /// turn on iframe loading flag
                $scope.data.loading = true;
            });

            /// IFrame onload callback
            $window.finishedLoadingPlunker = function () {
                $scope.$apply(function () {
                    /// turn off loading flag
                    $scope.data.loading = false;
                });
            };
        }
        init();
    });
}());