'use strict';

angular.module('angularLinkedSubmit',[])
    .directive('angularLinkedSubmit', function(){
    return function (scope, element, attrs) {
        var id = attrs["linked"];
        element.on("click",function(){
            document.getElementById(id).click();
        });
    };
}
});

