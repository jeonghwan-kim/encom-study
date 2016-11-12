angular.module('todomvc').directive('todoText', () => {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: (scope, elem, attr, modelCtrl) => {
      modelCtrl.$validators.todoText = (modelValue, viewValue) => {
          if (viewValue) return /^(:\w+\s)/.test(viewValue); // :category1 todo1
      }
    }
  }
});
