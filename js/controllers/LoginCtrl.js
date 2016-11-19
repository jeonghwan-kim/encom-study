angular.module('todomvc')
.controller('LoginCtrl', function($scope,user){
  $scope.login = user.login;

});
