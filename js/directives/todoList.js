https://github.com/jeonghwan-kim/encom-study


angular.module('todomvc').directive('todoList', () => {
  return {
    restrict: 'E',
    scope: {
      data: '=',
      onRemove: '&',
      stat: '='
    },
    template: `
      <ul>
        <li ng-repeat="todo in data | filter:stat">
          <todo-item data="todo" on-remove="onRemove({todo:todo})"></todo-item>
        </li>
      </ul>
      `
  }
});
