(function () {
    'use strict';
    var app = angular.module('ngShowcase', ['ui.router', 'ngResource', 'ngSanitize', 'ngShowcase.auth', 'ngShowcase.data', 'ngShowcase.configuration', 'ngShowcase.utils', 'ngShowcase.pages.master', 'ngShowcase.pages.browse', 'ngShowcase.pages.details', 'ngShowcase.pages.add']);

    app.config(['$urlRouterProvider',
        function ( $urlRouterProvider) {
            $urlRouterProvider.otherwise('/browse');
        }
    ]);

    app.run(['$rootScope', '$state', 'Auth', function ($rootScope, $state, Auth) {
        $rootScope.$state = $state;
        $rootScope.Auth = Auth;
    }]);
}());