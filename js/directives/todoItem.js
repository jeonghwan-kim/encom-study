angular.module('todomvc').directive('todoItem', () => {
  return {
    restrict: 'E',
    scope: {
      data: '=',
      onRemove: '&'
    },
    template: `
      <input type="checkbox" ng-model="data.done" />
      <input type="text" ng-model="data.title" />
      <button ng-click="onRemove({todo: data})">Remove</button>
      `
  }
});
