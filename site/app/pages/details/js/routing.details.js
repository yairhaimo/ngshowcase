(function () {
    'use strict';
    var page = angular.module('ngShowcase.pages.details');

    page.config(['$stateProvider',
      function ($stateProvider) {
          $stateProvider
              .state('master.details', {
                  url: '/details/:id',
                  templateUrl: 'app/pages/details/views/details.html',
                  controller: 'DetailsController'
              });
      }
    ]);
}());