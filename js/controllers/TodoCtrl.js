angular.module('todomvc').controller('TodoCtrl', function($scope) {
  $scope.todos = [
    {
      id: 1,
      title: 'angular study',
      done: false,
      createdAt: Date.now() - 3600 * 1000
    },
    {
      id: 2,
      title: 'cleaning room',
      done: true,
      createdAt: Date.now() - 3600 * 2000
    },
    {
      id: 3,
      title: 'yoga',
      done: false,
      createdAt: Date.now() - 3600 * 3000
    }
  ];

  $scope.remove = (todo) => {
    angular.copy(
      $scope.todos.filter(t => t.id !== todo.id),
      $scope.todos);
  };

  $scope.create = (newTodoTitle) => {
    if (!newTodoTitle && !newTodoTitle.trim().length) return;
    $scope.todos.push({
      // id: $scope.todos.reduce((max, todo) => todo.id > max ? todo.id : max, 0) + 1,
      id: Date.now(),
      title: newTodoTitle,
      done: false
    });
  };

  $scope.status = {};

});
