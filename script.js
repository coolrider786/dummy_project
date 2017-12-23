 
 
/* .config[('$routeProvider',function($routeProvider) {
   $routeProvider.
   when('/main', {
     templetUrl: 'main.html',
     controller: 'MainCtrl'
   });
 })] */


var app = angular.module('computer', []);
app.controller('MainCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    console.log($scope.firstName);
});
