angular.module('todomvc')
.controller('MenuCtrl', function($scope,user){
  $scope.isLogin = user.isLogin;
  $scope.logout = user.logout;
});
