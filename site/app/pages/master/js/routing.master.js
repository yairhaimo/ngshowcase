﻿(function () {
    'use strict';
    var page = angular.module('ngShowcase.pages.master');

    page.config(['$stateProvider',
      function ($stateProvider) {
          $stateProvider
              .state('master', {
                  url: '',
                  abstract: true,
                  templateUrl: 'app/pages/master/views/master.html',
                  controller: 'MasterController'
              });
      }
    ]);
}());