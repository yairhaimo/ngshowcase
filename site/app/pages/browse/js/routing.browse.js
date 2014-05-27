(function () {
    'use strict';
    var page = angular.module('ngShowcase.pages.browse');

    page.config(['$stateProvider',
      function ($stateProvider) {
          $stateProvider
              .state('master.browse', {
                  url: '/browse',
                  templateUrl: 'app/pages/browse/views/browse.html',
                  controller: 'BrowseController',
                  resolve: {
                      Items: function (Item) {
                          return Item.query(function (data) {
                              return data;
                          });
                      },
                      ItemTypes: function (ItemType) {
                          return ItemType.query(function (data) {
                              return data;
                          });
                      }
                  }
              })
              .state('master.browseType', {
                  url: '/browse/:itemType',
                  templateUrl: 'app/pages/browse/views/browse.html',
                  controller: 'BrowseController',
                  resolve: {
                      Items: function (Item, $stateParams) {
                          return Item.query({ ItemType: $stateParams.itemType }, function (data) {
                              return data;
                          });
                      },
                      ItemTypes: function (ItemType) {
                          return ItemType.query(function (data) {
                              return data;
                          });
                      }
                  }
              });
      }
    ]);
}());