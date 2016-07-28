'use strict';

angular.module('dir.owlCarousel', []).directive('owlCarouselItem',[function() {
    return function(scope, element) {
        if (scope.$last) {
            $(element.parent()).owlCarousel();
        }
   };
 }]);
