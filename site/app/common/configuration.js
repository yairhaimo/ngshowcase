(function () {
    'use strict';

    var configuration = angular.module('ngShowcase.configuration', []);

    configuration.service('Configuration', function () {
        this.baseurl = '';
        this.apiurl = this.baseurl + '/api';
        this.appurl = this.baseurl + '/app';
        this.plnkrRunUrl = 'http://run.plnkr.co/plunks/';
        this.plnkrEditUrl = 'http://plnkr.co/edit/';
        this.plnkrPreviewSuffix = '?p=preview';
    });

}());