'use strict';

angular.module('API', []).factory('API', ['$http', function($http){

    var service = {};
    var api_url = ""; //API base url

    service.movies = function (callback) {

        var req = {
            method: 'GET',
            url: 'https://demo2697834.mockable.io/movies'
        };
        $http(req).then(function(response){
            callback(response.data);
        }, function(error){
            alert("A movie API error.");
        });
    };
    
    service.watched = function (callback) {

        var req = {
            method: 'GET',
            url: 'https://demo2697834.mockable.io/movies'
        };
        $http(req).then(function(response){
            callback(response.data);
        }, function(error){
            alert("A movie API error.");
        });
    };
    
    service.updateHistory = function (data, callback) {
        
        console.log(data);callback(data);

//        var req = {
//            method: 'PUT',
//            url: 'https://demo2697834.mockable.io/movies'
//        };
//        $http(req).then(function(response){
//            callback(response.data);
//        }, function(error){
//            alert("A movie API error.");
//        });
    };

    return service;
}]);