angular.module('todomvc')
.controller('TodoCtrl', function($scope, $routeParams, $location, todoStorage) {
  $scope.todos = todoStorage.get();

  if ($routeParams.filter === 'pending') {
    $scope.status = {done: false};
  } else if ($routeParams.filter === 'done') {
    $scope.status = {done: true};
  } else {
    $location.path('/');
  }

  $scope.remove = (todo) => {
    angular.copy(
      $scope.todos.filter(t => t.id !== todo.id),
      $scope.todos);
  };

  $scope.create = (newTodoTitle) => {
    if (!newTodoTitle && !newTodoTitle.trim().length) return;
    $scope.todos.push({
      id: Date.now(),
      title: newTodoTitle,
      done: false
    });
  };
});
