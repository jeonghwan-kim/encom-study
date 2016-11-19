angular.module('todomvc', ['ngRoute', 'ngCookies'])
.config(function($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
})
.config(function($routeProvider, $locationProvider) {
  const routeConfig = {
    controller: 'TodoCtrl',
    templateUrl: 'templates/main.html'
  };

  $routeProvider
    .when('/register', {
      controller: 'RegisterCtrl',
      templateUrl: 'templates/register.html'
    })
    .when('/login', {
      controller: 'LoginCtrl',
      templateUrl: 'templates/login.html'
    })
    .when('/', routeConfig)
    .when('/:filter', routeConfig);

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
})
.factory('authInterceptor', ($location, $q, $cookies) => {
  return {
    request: function (config) {
      const token = $cookies.get('accessToken');
      if (token) config.headers.Authorization = `Bearer ${token}`;
      if ($location.path() !== '/register') $location.path('/login');
      return config;
    },
    responseError: function (err) {
      if (err.status === 401) $location.path('/login')
      return $q.resolve(err);
    }
  }
});
