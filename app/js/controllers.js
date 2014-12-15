
var ArielApp = angular.module("ArielApp", []);

ArielApp.controller("ArielCtrl", [ '$scope', '$http', ArielCtrl2] );


    function ArielCtrl2($scope, $http) {
        $scope.query =  "";

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
