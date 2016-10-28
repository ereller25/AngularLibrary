// Setting up the functionality of the app, name of variable and module don't have to match
// All application code resides here - for this demo everything resides here to control the app
var myNinjaApp = angular.module('myNinjaApp', []);

// Controllers - usually SomethingController
myNinjaApp.controller('NinjaController', ['$scope', function($scope){
// Scope - binding between html and JS controller, binding to both
// Scope dependency - $scope doesn't always work. Need to pass function as an array
$scope.message = "hey all";

$scope.ninjas = ['yoshi', 'crystal', 'ryu', 'subzero'];

}]);
