angular.module('todomvc').directive('todoList', () => {
  return {
    restrict: 'E',
    scope: {
      data: '=',
      onRemove: '&',
      onUpdate: '&',
      stat: '='
    },
    template: `
      <ul>
        <li ng-repeat="todo in data | filter:stat track by $index">
          <todo-item data="todo"
                     on-remove="onRemove({todo:todo})"
                     on-update="onUpdate({todo:todo})"></todo-item>
        </li>
      </ul>
      `
  }
});
