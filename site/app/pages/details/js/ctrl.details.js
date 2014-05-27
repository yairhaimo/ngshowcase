(function () {
    'use strict';
    var page = angular.module('ngShowcase.pages.details');

    page.controller('DetailsController', function ($scope, Item, Comment, $stateParams, $sce, $window, Configuration, SelectedItem) {

        $scope.postComment = function () {
            $scope.newComment.User = $scope.Auth.user;
            $scope.newComment.Date = new Date();
            $scope.newComment.$save({ ItemId: $scope.data.item.Id }, function () {
                Comment.query({ ItemId: $scope.data.item.Id }, function (data) {
                    $scope.data.item.Comments = data;
                });
            });
            
        };

        function init() {
            $scope.newComment = new Comment();
            $scope.data = {
                item: SelectedItem
            };
            $scope.Configuration = Configuration;

            
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