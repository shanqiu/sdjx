'use strict';

/**
 * @ngdoc function
 * @name sdjxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sdjxApp
 */
var app = angular.module('sdjxApp')
  .controller('MainCtrl', function ($scope,$sce) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
  });