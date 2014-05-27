(function () {
    'use strict';

    var auth = angular.module('ngShowcase.auth', ['ngShowcase.data']);

    auth.factory('Auth', function ($rootScope, User) {
        var ngshowcaseRef = new Firebase('https://ngshowcase.firebaseio.com/');
        var _user = {};
        var _auth = new FirebaseSimpleLogin(ngshowcaseRef, function (error, user) {
            $rootScope.$apply(function () {
                if (error) {
                    /// TODO: handle errors
                    console.log(error);
                } else if (user) {
                    var newUser = new User();
                    newUser.Id = user.id;
                    newUser.Name = user.displayName;
                    newUser.AvatarUrl = user.thirdPartyUserData.avatar_url;
                    newUser.HomePageUrl = user.thirdPartyUserData.html_url;
                    newUser.$save();
                    angular.copy(newUser, _user);
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
                return !!_user.Name;
            }
        };
    });


}());