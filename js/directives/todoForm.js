angular.module('todomvc').directive('todoForm', ($http) => {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    template: `
      <form name="todoForm" ng-submit="create(newTodoTitle)">
        <input type="text"
               name="title"
               ng-model="newTodoTitle"
               ng-minlength="3"
               ng-required="true"
               todo-text
               ng-trim="true" />
         <input type="submit" value="Add" ng-disabled="!todoForm.title.$modelValue" />
      </form>
      <p ng-if="todoForm.title.$error.minlength">3자리 이상 입력하세요.</p>
      <p ng-if="todoForm.title.$dirty && todoForm.title.$error.required">반드시 입력하세요.</p>
      <p ng-if="todoForm.title.$error.todoText">":그룹 할일" 형식으로 입력하세요</p>
      `,
     link: (scope, elem, attr) => {
       scope.newTodoTitle =  '';
       scope.create = newTodoTitle => {
         scope.onCreate({title: newTodoTitle});
         scope.newTodoTitle = '';
       }
     }
  }
});
