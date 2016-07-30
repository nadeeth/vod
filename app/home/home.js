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

        //Play video 
        ngDialog.open({ 
            template: 'player.html', 
            className: 'ngdialog-theme-default',
            scope: $scope
        });
        
        //Update history for the video playing
        API.updateHistory({
            vid:mov.id,
            url:encodeURI(mov.contents[0].url), 
            thumbnail:encodeURI(mov.images[0].url), 
            title:mov.title, 
            description:mov.description}, function(data) {
            //Do something after updating history
            console.log(data);
        });
    };

}]);