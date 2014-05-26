(function () {
    'use strict';
    var page = angular.module('ngShowcase.pages.details');

    page.config(['$stateProvider',
      function ($stateProvider) {
          $stateProvider
              .state('details', {
                  url: '/details/:id',
                  templateUrl: 'app/pages/details/views/details.html',
                  controller: 'DetailsController',
                  resolve: {
                      selectedItem: function (Item, $stateParams) {
                          return Item.get({ Id: $stateParams.id }, function (data) { return data; });
                      }
                  }
              });
      }
    ]);
}());