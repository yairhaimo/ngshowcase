(function () {
    'use strict';
    var page = angular.module('ngShowcase.pages.add');

    page.config(['$stateProvider',
      function ($stateProvider) {
          $stateProvider
              .state('add', {
                  url: '/add',
                  templateUrl: 'app/pages/add/views/add.html',
                  controller: 'AddController'
              });
      }
    ]);
}());