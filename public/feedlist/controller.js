/* feedlist */

angular.module('travel')
    .controller('feedlist', function($scope){
        FB.api('/me', {fields: 'last_name'}, function(response) {
            console.log(response);
        });
    });

