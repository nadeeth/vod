'use strict';

angular.module('myApp.history', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/history', {
    templateUrl: 'routes/history/history.html',
    controller: 'HistoryCtrl'
  });
}])

.controller('HistoryCtrl', ['$scope','API','ngDialog', function($scope, API, ngDialog) {
        
    $scope.watched_entries = [];
    $scope.now_playing = null;

    //Load all the watched videos from history
    API.watched(function(res) {
        $scope.watched_entries = res;
    });
    
    //Play the selected video from history
    $scope.play = function(mov) {
        
        $scope.now_playing = mov;

        ngDialog.open({ 
            template: 'snippets/player.html', 
            className: 'ngdialog-theme-default',
            scope: $scope
        });
    };
    
    //Delete an entry from history
    $scope.delete = function($event, id) {
    
        API.deleteHistory(id, function(res){
            if (res.success) {
                $($event.target).parent().hide();
            }
        });
    };

}]);