'use strict';

angular.module('myApp.history', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/history', {
    templateUrl: 'history/history.html',
    controller: 'HistoryCtrl'
  });
}])

.controller('HistoryCtrl', ['$scope','API','ngDialog', function($scope, API, ngDialog) {
        
    $scope.watched_entries = [];
    $scope.now_playing = null;

    API.watched(function(res) {
        $scope.watched_entries = res.entries;
    });
    
    $scope.play = function(url,title,description) {
        
        $scope.now_playing = {url:url,title:title,desc:description};

        ngDialog.open({ 
            template: 'player.html', 
            className: 'ngdialog-theme-default',
            scope: $scope
        });
    };

}]);