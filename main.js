//var greetings = require("./greetings.js");

// // "Hello"
// greetings.sayHelloInEnglish();
//
// // "Hola"
// greetings.sayHelloInSpanish();
//greeting.x();

require.config({
            paths: {
                'jquery': 'libs/jQuery-3.1.1',
                'angular': 'libs/angular'
            },
            shim: {
                    'angular': {
                        exports: 'angular'
                    }
                },
   });

require(["greetings", "Purchasing/purchase", "jquery", "angular"],function(greetings, purchase, $, angular){
  var app = angular.module('myApp', []);
  app.controller('myGreetCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
    $scope.greetingtext = "";
    $scope.greet = false;
    $scope.greetInEnglish = function(){
      $scope.greetingtext = greetings.getGreetingsInEnglish()+ ( " "+ $scope.firstName +" "+ $scope.lastName);
      $scope.greet = true;
    };
    $scope.greetInSpanish = function(){
      $scope.greetingtext = greetings.getGreetingsInSpanish()+ (  $scope.firstName + $scope.lastName);
      $scope.greet = true;
    };
    $scope.stopGreeting = function(){
      $scope.greetingtext = "";
      $scope.greet = false;
    };

  });



  app.controller('myPurchaseCtrl', function($scope, $timeout) {
    $scope.canPurchasetext = "";
    $scope.purchase = false;
    $scope.checkPurchasingStatus = function(){
      $scope.canPurchasetext = "You can "+(purchase.purchaseProduct()?"":" not ")+" purchase products.";
      $scope.purchase = true;
      $timeout(function () {
        $scope.purchase = false;
        $scope.canPurchasetext = "";
      }, 1000);
    };
    $scope.JqueryRef = $.toString();
    console.log($scope.JqueryRef);
  });

});




/*
purchase.js depends upon both credits.js and products.js. Therefore, those files need to be loaded before calling purchaseProduct().
*/
