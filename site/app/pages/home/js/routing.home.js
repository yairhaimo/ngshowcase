(function () {
    'use strict';
    var page = angular.module('ngShowcase.pages.home');

    page.config(['$stateProvider',
      function ($stateProvider) {
          $stateProvider
              .state('master.home', {
                  url: '/',
                  templateUrl: 'app/pages/home/views/home.html',
                  controller: 'HomeController'
              });
      }
    ]);
}());