'use strict';

angular.module('dir.video', []).directive('videoClose',[function() {
    return function(scope, element) {
        //Exit the fullscreen mode at the end to show previos screen
        element[0].addEventListener('ended',function(){
            this.webkitExitFullscreen();
        });
        //Make the video full screen on start
        /*
        element[0].addEventListener('play',function(){
            this.webkitRequestFullscreen();
        });
        */
    };
 }]);
