(function () {
    'use strict';
    var app = angular.module('ngShowcase', ['ui.router', 'ngResource', 'ngSanitize', 'ngShowcase.data', 'ngShowcase.configuration', 'ngShowcase.utils', 'ngShowcase.pages.master', 'ngShowcase.pages.browse', 'ngShowcase.pages.details', 'ngShowcase.pages.add']);

    app.config(['$urlRouterProvider',
        function ( $urlRouterProvider) {
            $urlRouterProvider.otherwise('/browse');
        }
    ]);

    app.run(['$rootScope', '$state', function ($rootScope, $state) {
        $rootScope.$state = $state;
    }]);
}());