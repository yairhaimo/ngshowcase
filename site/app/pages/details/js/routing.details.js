(function () {
    'use strict';
    var page = angular.module('ngShowcase.pages.details');

    page.config(['$stateProvider',
      function ($stateProvider) {
          $stateProvider
              .state('master.details', {
                  url: '/details/:id',
                  templateUrl: 'app/pages/details/views/details.html',
                  controller: 'DetailsController',
                  resolve: {
                      SelectedItem: function ($stateParams, Item, Configuration, $sce) {
                          return Item.get({ Id: $stateParams.id }, function (data) {
                              data.PlnkrUrl = $sce.trustAsResourceUrl(Configuration.plnkrRunUrl + data.PlnkrId);
                              return data;
                          });
                      }
                  }
              });
      }
    ]);
}());