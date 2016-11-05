angular.module('todomvc').directive('todoFilters', () => {
  return {
    restrict: 'E',
    scope: {
      stat: '='
    },
    template: `
      <button ng-click="stat={done:true}">Completed</button>
      <button ng-click="stat={done:false}">Active</button>
      <button ng-click="stat={}">All</button>
      `
  }
});
