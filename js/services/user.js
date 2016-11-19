angular.module('todomvc')
.factory('user', ($http, $cookies, $location) => {
  const user = {
    login(email, password) {
      const params = {email, password};
      $http.post('http://localhost:3002/v1/auth', params)
           .then(res => {
             if(res.status === 201) {
               $cookies.put('accessToken', res.data.user.accessToken);
               $location.path('/');
             } else {
               alert(JSON.stringify(res));
             }
           }).catch(err => {
             console.log(err)
           });
    },
    isLogin() {
      return !!$cookies.get('accessToken');
    },
    logout() {
      $cookies.remove('accessToken');
      $location.path('/login');
    },
    create(email, password) {
      const params = {email, password};
      $http.post('http://localhost:3002/v1/users', params)
           .then(res => {
             if (res.status === 201) {
               $location.path('/login');
             } else {
               alert(JSON.stringify('res'));
             }
           });
    }
  };
  return user;
})
