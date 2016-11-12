angular.module('todomvc').directive('todoItem', ($filter) => {
  return {
    restrict: 'E',
    scope: {
      data: '=',
      onRemove: '&',
      onUpdate: '&'
    },
    template: `
      <input type="checkbox" ng-model="data.done" ng-click="onUpdate({todo: data})" />
      <input type="text" ng-model="data.title" ng-blur="onUpdate({todo: data})" />
      <date>{{ createdAt2 }}</date>
      <button ng-click="onRemove({todo: data})">Remove</button>
      `,
    link: (scope) => {
      scope.createdAt2 = [
        $filter('dateKo')(scope.data.createdAt),
        $filter('timeKo')(scope.data.createdAt)
      ].join(' ');
    }
  }
});
