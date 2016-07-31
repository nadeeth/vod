'use strict';

angular.module('API', []).factory('API', ['$http', function($http){

    var service = {};
    var api_url = "http://localhost:3000"; //API base url

    service.movies = function (callback) {

        service.sendRequest({
            method: 'GET',
            url: 'https://demo2697834.mockable.io/movies'
        },callback);
    };
    
    service.watched = function (callback) {

        service.sendRequest({
            method: 'GET',
            url: api_url+'/history'
        },callback);
    };
    
    service.updateHistory = function (data, callback) {
        
        service.sendRequest({
            method: 'PUT',
            url: api_url+'/history',
            data: data
        },callback);
    };
    
    service.deleteHistory = function (id, callback) {
        
        service.sendRequest({
            method: 'DELETE',
            url: api_url+'/history/'+id
        },callback);
    };
    
    service.sendRequest = function(req, callback) {
        
        $http(req).then(function(response){
            callback(response.data);
        }, function(error){
            alert(error);
        });
    };

    return service;
}]);