'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope','API','ngDialog', function($scope, API, ngDialog) {
        
    $scope.entries = [];
    $scope.now_playing = null;

    API.movies(function(res) {
        $scope.entries = res.entries;
    });
    
    $scope.play = function(mov) {
        
        $scope.now_playing = mov;

        ngDialog.open({ 
            template: 'player.html', 
            className: 'ngdialog-theme-default',
            scope: $scope
        });
        
        API.updateHistory(mov.id, function(data) {
            alert(data);
        });
    };

}]);