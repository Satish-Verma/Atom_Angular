define(['firstCtrl'], function(angular){
  var app = angular.module('myFirstApp', []);
  app.controller('myfirstCtrl', function($scope) {
    $scope.OneDollarValue = "$65";
  };
  return app;
});
