// your angular app starting point
angular.module('secretMessageApp', ['ngCookies', 'ngResource', 'ngMessages', 'ngRoute', 'mgcrea.ngStrap'])
  .config(["$locationProvider", "$routeProvider", function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      // .when('/reveal/:id', {
      //   templateUrl: 'views/revealDetails.html',
      //   controller: 'RevealCtrl'
      // })
      .when('/reveal', {
        templateUrl: 'views/reveal.html',
        controller: 'RevealCtrl'
      })
      .when('/create', {
        templateUrl: 'views/create.html',
        controller: 'CreateCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
