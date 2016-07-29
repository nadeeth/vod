'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'API',
  'dir.owlCarousel',
  'ngDialog',
  'myApp.home',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider','$sceDelegateProvider', function($locationProvider, $routeProvider, $sceDelegateProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/home'});
  $sceDelegateProvider.resourceUrlWhitelist(['**']);
}]);
