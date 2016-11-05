angular.module('todomvc').directive('todoItem', ($filter) => {
  return {
    restrict: 'E',
    scope: {
      data: '=',
      onRemove: '&'
    },
    template: `
      <input type="checkbox" ng-model="data.done" />
      <input type="text" ng-model="data.title" />
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
