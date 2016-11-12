angular.module('todomvc', ['ngRoute'])

angular.module('todomvc').config(function($routeProvider, $locationProvider) {
  const routeConfig = {
    controller: 'TodoCtrl',
    templateUrl: 'templates/main.html'
  };

  $routeProvider.when('/', routeConfig)
                .when('/:filter', routeConfig);

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});
