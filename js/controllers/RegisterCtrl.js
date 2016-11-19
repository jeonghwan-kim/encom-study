angular.module('todomvc')
.controller('RegisterCtrl', function($scope,user){
  $scope.register = (email, password, password1) => {
    $scope.msg = '';
    if (password === password1) user.create(email, password);
    else $scope.msg = '비밀번호를 확인하세요.'
  }

});
