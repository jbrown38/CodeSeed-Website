'use strict';
var app = angular.module("CodeSeed", ['ngRoute']);


app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home.html',
    controller: 'homeCtrl'
  });

  $routeProvider.when('/WhatWeDo', {
    templateUrl: 'WhatWeDo.html',
    controller: 'WhatWeDoCtrl'
  });

  $routeProvider.when('/WhoWeAre', {
    templateUrl: 'WhoWeAre.html',
    controller: 'WhoWeAreCtrl'
  });

  $routeProvider.when('/HowWeThink', {
    templateUrl: 'HowWeThink.html',
    controller: 'HowWeThinkCtrl'
  });

  $routeProvider.when('/LetsTalk', {
    templateUrl: 'LetsTalk.html',
    controller: 'LetsTalkCtrl'
  });
  
  $routeProvider.otherwise({redirectTo: '/'});

}]);


app.controller('homeCtrl', ['$scope', function($scope){
    $scope.message = '';
}]);

app.controller('WhatWeDoCtrl', ['$scope', function($scope){
    $scope.message = '';
}]);

app.controller('WhoWeAreCtrl', ['$scope', function($scope){
    $scope.message = '';
}]);

app.controller('HowWeThinkCtrl', ['$scope', function($scope){
    $scope.message = '';
}]);

app.controller('LetsTalkCtrl', ['$scope', function($scope){
    $scope.message = 'lets talk';
}]);
