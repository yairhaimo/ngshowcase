(function () {
    'use strict';

    var configuration = angular.module('ngShowcase.configuration', []);

    configuration.service('Configuration', function () {
        this.baseurl = '';
        this.apiurl = this.baseurl + '/api';
        this.appurl = this.baseurl + '/app';
    });

}());