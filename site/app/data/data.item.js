(function () {
    'use strict';

    var data = angular.module('ngShowcase.data');

    data.factory('Item', function (Configuration, $resource) {
        var _resource = '/Items/:Id';
        return $resource(Configuration.apiurl + _resource);
    });
}());