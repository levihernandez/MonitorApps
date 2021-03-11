'use strict';
//Inf0D1
/**
 * Main AngularJS Web Application
 */

//var host = $location.host();
//var path = $location.path();
//var hostpath = host+"/"+path;
//console.log(hostpath);
var app = angular.module('myApp', ['ngRoute']);

app.filter('trust',['$sce', function($sce){

    return function(text){
        return $sce.trustAsHtml(text);
    }
    
}]);

//app.value('getid', getid);

app.value('hostroot', 'http://localhost');

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    // Home

        .when("/", {
            templateUrl: "comp/apache.html",
            controller: "MenuController"
        })
        .when("/apache", {
            templateUrl: "comp/apache.html",
            controller: "MenuController"
        })
        // else 404
        .otherwise("/404", {
            templateUrl: "comp/404.html",
            controller: "MenuController"
        });
}]);

// Generate Site Menu
app.controller('MenuController', function($scope, $http, $interval, hostroot) {
    var url = hostroot + "/data/menu.json";
    var menu = null;
    var active = "";

    return $http.get(url)
        .success(function(response) {
            $scope.myFunction = function(href) {
                alert(href);
            }
            $scope.menu = response.menu;
        });


    // Activates the Carousel
    $('.carousel').carousel({
        //interval: 5000
    });

    // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({
        selector: "a[data-toggle=tooltip]"
    });

});


// Generate content data
app.controller('ApacheController', function($scope, $http, $interval, hostroot) {

    var url = hostroot+"/data/apacheStatus.json";
    var server = null;

    $interval(function() {
        return $http.get(url)
            .success(function(response) {
                $scope.apache = response.apache;
                
            });
    }, 5000);
});

