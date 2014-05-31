(function () {
    'use strict';
    var app = angular.module('ngShowcase', ['ui.router', 'ui.bootstrap', 'ngResource', 'ngSanitize', 'ngAnimate', 'ngShowcase.browser', 'ngShowcase.auth', 'ngShowcase.data', 'ngShowcase.configuration', 'ngShowcase.utils', 'ngShowcase.pages.master', 'ngShowcase.pages.browse', 'ngShowcase.pages.details', 'ngShowcase.pages.add', 'ngShowcase.pages.user', 'ngShowcase.pages.home']);

    app.config(['$urlRouterProvider', '$locationProvider',
        function ( $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise('/browse');
            $locationProvider.hashPrefix('!');
        }
    ]);

    app.run(['$rootScope', '$state', 'Auth', function ($rootScope, $state, Auth) {
        $rootScope.$state = $state;
        $rootScope.Auth = Auth;
    }]);
}());