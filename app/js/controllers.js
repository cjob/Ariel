var ArielApp = angular.module('ArielApp', []);

ArielApp.controller('ArielCtrl', function ($scope) {
  Worker = 
  $scope.Workers = [
    { 'name' : $scope.query, 'snippet': 'test'},
    {  'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
});