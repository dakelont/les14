'use strict';

angular.module('myApp.myaccount', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/myaccount', {
      templateUrl: 'myaccount/myaccount.html',
      controller: 'myaccountCtrl'
    });
  }])

  .controller('myaccountCtrl', ['$scope', function($scope) {
        $scope.save = function (answer, answerForm){
            if(answerForm.$valid){
                // действия по сохранению
                console.log(answer);
                alert(answer.name + ", ваш запрос сохранен");
            }
        };
  }]);