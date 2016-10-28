// Setting up the functionality of the app, name of variable and module don't have to match
// All application code resides here - for this demo everything resides here to control the app
var myNinjaApp = angular.module('myNinjaApp', ['ngRoute', 'ngAnimate']);

myNinjaApp.config(['$routeProvider',  function($routeProvider){

//  $locationProvider.html5mode(true);

  $routeProvider
  .when('/home', {
    templateUrl: 'views/home.html',
    controller: 'NinjaController'
  })
  .when('/contact', {
    templateUrl: 'views/contact.html',
    controller: 'ContactController'
  })
  .when('/contact-success', {
    templateUrl: 'views/contact-success.html',
    controller: 'ContactController'
  })
  .when('/directory', {
    templateUrl: 'views/directory.html',
    controller: 'NinjaController' //can take the ng-controller out of directory.html as this tells the app what is being controlled
  }).otherwise({
    redirectTo: '/home'
  });

}]);
//Custom directive - a tag in the html that is being controlled here. This makes a random ninja appear on the homepage
myNinjaApp.directive('randomNinja', [function(){
  return {
    restrict: 'E',
    scope: {
      ninjas: '=',
      title: '='
    },
    templateUrl: 'views/random.html',
    transclude: true,
    replace: true,
    controller: function($scope){
      $scope.random = Math.floor(Math.random() * 4);
    }
  };

}]);


// $http - grabs data from an external source and displays it, see function below
myNinjaApp.controller('NinjaController', ['$scope', '$http', function($scope, $http){

  $scope.removeNinja = function(ninja){
    var removedNinja = $scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removedNinja, 1);
  };

$scope.addNinja = function(){
  $scope.ninjas.push({
      name: $scope.newninja.name,
      belt: $scope.newninja.belt,
      rate: parseInt($scope.newninja.rate),
      available: true
  });
// clears the form
  $scope.newninja.name = "";
  $scope.newninja.belt = "";
  $scope.newninja.rate = "";

};

$scope.removeAll = function(){
  $scope.ninjas = [];
};

$http.get('data/ninjas.json').success(function(data){
  $scope.ninjas = data;
});

// Converts the angular to JSON
// console.log(angular.toJson($scope.ninjas));

}]);

myNinjaApp.controller('ContactController', ['$scope', '$location', function($scope, $location){

  $scope.sendMessage = function(){
    $location.path('contact-success');
  };

}]);
