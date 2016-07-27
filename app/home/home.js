'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope','API', function($scope, API) {
        
    $scope.entries = [];

    API.movies(function(res) {
        $scope.entries = res.entries;
    });

}]);