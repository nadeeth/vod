'use strict';

angular.module('API', []).factory('API', ['$http', function($http){

    var service = {};
    var api_url = "http://localhost:3000"; //API base url

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
            url: api_url+'/history'
        };
        $http(req).then(function(response){
            callback(response.data);
        }, function(error){
            alert("A movie API error.");
        });
    };
    
    service.updateHistory = function (data, callback) {
        
        var req = {
            method: 'PUT',
            url: api_url+'/history',
            data: data
        };
        $http(req).then(function(response){
            callback(response.data);
        }, function(error){
            alert("A movie API error.");
        });
    };
    
    service.deleteHistory = function (id, callback) {
        
        var req = {
            method: 'DELETE',
            url: api_url+'/history/'+id
        };
        $http(req).then(function(response){
            callback(response.data);
        }, function(error){
            alert("A movie API error.");
        });
    };

    return service;
}]);