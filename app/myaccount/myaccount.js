'use strict';

angular
  .module('myApp')
  .controller('myaccountCtrl', function() {
    var vm = this;
     vm.save = function (answer, answerForm){
      if(answerForm.$valid){
      // действия по сохранению
        console.log(answer);
        alert(answer.name + ", ваш запрос сохранен");
      }
    };
  });