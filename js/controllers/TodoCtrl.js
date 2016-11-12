angular.module('todomvc')
.controller('TodoCtrl', function($scope, $routeParams, $location, todoStorage) {
  $scope.todos = todoStorage.get();
  $scope.remove = todoStorage.remove;
  $scope.create = todoStorage.create;
  $scope.update = todoStorage.update;

  $scope.status = {};

  if ($routeParams.filter === 'pending') {
    $scope.status = {done: false};
  } else if ($routeParams.filter === 'done') {
    $scope.status = {done: true};
  } else {
    $location.path('/');
  }
});
