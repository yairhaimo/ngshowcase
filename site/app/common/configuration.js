(function () {
    'use strict';

    var configuration = angular.module('ngShowcase.configuration', []);

    configuration.service('Configuration', function () {
        this.baseurl = 'http://localhost:55246';
        this.apiurl = this.baseurl + '/api';
    });

}());