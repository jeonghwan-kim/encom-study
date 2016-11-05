angular.module('todomvc').directive('todoForm', () => {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    template: `
      <form name="todoForm" ng-submit="onCreate({title: newTodoTitle})">
        <input type="text"
               name="title"
               ng-model="newTodoTitle"
               ng-minlength="3" />
             <input type="text" name="foo">
        <input type="submit" value="Add" ng-disabled="!todoForm.title.$modelValue" />
      </form>
      <pre>{{todoForm|json}}</pre>
      <p ng-if="todoForm.title.$error.minlength">3자리 이상 입력하세요.</p>
      `,
     link: (scope, elem, attr) => {
       scope.newTodoTitle =  '';
     }
  }
});
