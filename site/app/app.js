(function () {
    'use strict';
    var app = angular.module('ngShowcase', ['ui.router', 'ui.bootstrap', 'ngResource', 'ngSanitize', 'angularMoment', 'ngShowcase.auth', 'ngShowcase.data', 'ngShowcase.configuration', 'ngShowcase.utils', 'ngShowcase.pages.master', 'ngShowcase.pages.browse', 'ngShowcase.pages.details', 'ngShowcase.pages.add', 'ngShowcase.pages.user']);

    app.config(['$urlRouterProvider',
        function ( $urlRouterProvider) {
            $urlRouterProvider.otherwise('/browse');
        }
    ]);

    app.constant('angularMomentConfig', {
        timezone: 'Asia/Tel_Aviv' // optional
    });

    app.run(['$rootScope', '$state', 'Auth', function ($rootScope, $state, Auth) {
        $rootScope.$state = $state;
        $rootScope.Auth = Auth;
    }]);
}());