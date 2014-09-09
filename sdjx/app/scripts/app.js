'use strict';

/**
 * @ngdoc overview
 * @name sdjxApp
 * @description
 * # sdjxApp
 *
 * Main module of the application.
 */
angular
  .module('sdjxApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  // config 是对应ngRoute的路由器分配
