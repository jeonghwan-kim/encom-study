angular.module('todomvc').directive('todoForm', () => {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    template: `
      <input type="text" ng-model="newTodoTitle" />
      <button ng-click="onCreate({title: newTodoTitle})">Add</button>
      `,
     link: (scope, elem, attr) => {
       scope.newTodoTitle =  'foo';
     }
  }
});
