(function () {
    'use strict';
    var page = angular.module('ngShowcase.pages.user');

    page.config(['$stateProvider',
      function ($stateProvider) {
          $stateProvider
              .state('master.user', {
                  url: '/user/:name',
                  templateUrl: 'app/pages/user/views/user.html',
                  controller: 'UserController',
                  resolve: {
                      SelectedUser: function ($stateParams, User) {
                          return User.get({ UserName: $stateParams.name }, function (data) {
                              return data;
                          });
                      }
                  }
              });
      }
    ]);
}());