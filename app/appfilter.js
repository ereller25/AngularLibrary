// Setting up the functionality of the app, name of variable and module don't have to match
// All application code resides here - for this demo everything resides here to control the app
var myNinjaApp = angular.module('myNinjaApp', []);

//Filters - change how the data is displayed
myNinjaApp.controller('NinjaController', ['$scope', function($scope){


$scope.ninjas = [
  {
    name: "Yoshi",
    belt: "green"
  },
  {
    name: "Crystal",
    belt: "yellow"
  },
  {
    name: "Ryu",
    belt: "red"
  },
  {
    name: "Subzero",
    belt: "blue"
  }
];

}]);
