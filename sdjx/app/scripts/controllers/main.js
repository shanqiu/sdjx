'use strict';

/**
 * @ngdoc function
 * @name sdjxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sdjxApp
 */
var app = angular.module('sdjxApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.code = ['XNzc1NTU3NTMy','XNzYwMDc0OTgw'] ; 
  });
app.directive('myYouku', function($sce) {
  return {
    restrict: 'EA',
    scope: { code:'=' },
    replace: true,
    template: '<div style="height:400px;"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
    link: function (scope) {
        console.log('here');
        scope.$watch('code', function (newVal) {
           if (newVal) {
               scope.url = $sce.trustAsResourceUrl("http://player.youku.com/embed/" + newVal);
           }
        });
    }
  };
});