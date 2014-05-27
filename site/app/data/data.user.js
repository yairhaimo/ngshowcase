(function () {
    'use strict';

    var data = angular.module('ngShowcase.data');

    data.factory('User', function (Configuration, $resource) {
        var _resource = '/Users/:UserName';
        return $resource(Configuration.apiurl + _resource);
    });
}());