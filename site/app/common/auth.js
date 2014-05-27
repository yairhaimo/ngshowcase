(function () {
    'use strict';

    var auth = angular.module('ngShowcase.auth', []);

    auth.factory('Auth', function ($rootScope) {
        var ngshowcaseRef = new Firebase('https://ngshowcase.firebaseio.com/');
        var _user = {};
        var _auth = new FirebaseSimpleLogin(ngshowcaseRef, function (error, user) {
            $rootScope.$apply(function () {
                if (error) {
                    /// TODO: handle errors
                    console.log(error);
                } else if (user) {
                    angular.copy(user, _user);
                } else {
                    // user is logged out
                    angular.copy({}, _user);
                }
            });
        });
        return {
            login: function () {
                _auth.login('github', {
                    //rememberMe: true
                });
            },
            logout: function () {
                _auth.logout();
            },
            user: _user,
            isAuthenticated: function () {
                return !!_user.displayName;
            }
        };
    });


}());