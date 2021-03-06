﻿(function () {
    'use strict';
    var page = angular.module('ngShowcase.pages.browse');

    page.config(['$stateProvider',
      function ($stateProvider) {
          $stateProvider
              .state('master.browse', {
                  url: '/browse',
                  templateUrl: 'app/pages/browse/views/browse.html',
                  controller: 'BrowseController'
              });
      }
    ]);
}());