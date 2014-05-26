(function () {
    'use strict';
    var app = angular.module('ngShowcase', ['ui.router', 'ngResource', 'ngShowcase.data', 'ngShowcase.configuration', 'ngShowcase.pages.browse', 'ngShowcase.pages.details', 'ngShowcase.pages.add']);

    app.config(['$urlRouterProvider',
        function ( $urlRouterProvider) {
            $urlRouterProvider.otherwise('/browse');
        }
    ]);

    app.run(['$rootScope', '$state', function ($rootScope, $state) {
        $rootScope.$state = $state;
    }]);
}());