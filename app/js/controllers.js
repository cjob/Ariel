
/*
 var ArielApp = angular.module('ArielApp', ['ngResource']);

 ArielApp.controller('ArielCtrl', [ '$scope', '$resource',
 function($scope, $resource) {
 var Worker = $resource('http://localhost:3000/v1/Workers?email_address=job');
 console.log($resource);
 Worker.get( function(worker){
 $scope.Workers = worker;
 })
 } ]);


 var ArielApp = angular.module('ArielApp', []);

 ArielApp.controller('ArielCtrl', function($scope) {
 $scope.Workers = [
 { 'name' : $scope.query, 'snippet': 'test'},
 {  'name': 'Nexus S',
 'snippet': 'Fast just got faster with Nexus S.'},
 {'name': 'Motorola XOOM™ with Wi-Fi',
 'snippet': 'The Next, Next Generation tablet.'},
 {'name': 'MOTOROLA XOOM™',
 'snippet': 'The Next, Next Generation tablet.'}
 ];
 }); */


var ArielApp = angular.module("ArielApp", []);

ArielApp.controller("ArielCtrl", [ '$scope', '$http', ArielCtrl2] );


    function ArielCtrl2($scope, $http) {
        $scope.query =  "job";

        urlstring = "http://localhost:3000/v1/Workers?email_address=" + $scope.query;

        $scope.updateworkerlist = function() {
            urlstring = "http://localhost:3000/v1/Workers?email_address=" + $scope.query;
            $http({
                method : 'GET',
                url : urlstring
            }).success(function(data, status, headers, config) {
                $scope.Workers = data;
            }).error(function(data, status, headers, config) {
                alert( "failure");
            });
        };

        $scope.keyboardevent = function(keyEvent) {
            $scope.updateworkerlist();
        };

        $http({
            method : 'GET',
            url : urlstring
                   }).success(function(data, status, headers, config) {
            $scope.Workers = data;
        }).error(function(data, status, headers, config) {
            alert( "failure");
        });


    }
