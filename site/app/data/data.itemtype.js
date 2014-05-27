(function () {
    'use strict';

    var data = angular.module('ngShowcase.data');

    data.factory('ItemType', function (Configuration, $resource) {
        var _resource = '/ItemTypes';
        return $resource(Configuration.apiurl + _resource);
    });
}());