﻿(function () {
    'use strict';

    var data = angular.module('ngShowcase.data');

    data.factory('Comment', function (Configuration, $resource) {
        var _resource = '/Items/:ItemId/Comments/:CommentId';
        return $resource(Configuration.apiurl + _resource);
    });
}());