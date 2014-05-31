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
                              if (data.DemoUrl) {
                                  data.PreviewUrl = $sce.trustAsResourceUrl(data.DemoUrl);
                              }
                              else if (data.PlnkrUrl) {
                                  data.PreviewUrl = $sce.trustAsResourceUrl(data.PlnkrUrl);
                              }
                              else if ((data.HomePageUrl) && (data.HomePageUrl !== data.GitHubUrl)) {
                                  data.PreviewUrl = $sce.trustAsResourceUrl(data.HomePageUrl);
                              }
                              else if (data.GitHubUrl) {
                                  data.PreviewUrl = $sce.trustAsResourceUrl(data.GitHubUrl + '/blob/master/README.md');
                              }

                              return data;
                          });
                      }
                  }
              });
      }
    ]);
}());