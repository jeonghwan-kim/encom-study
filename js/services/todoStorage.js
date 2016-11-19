angular.module('todomvc').factory('todoStorage', ($http) => {
  const storage = {
    _todos: [],
    get: () => {
      $http.get(`http://localhost:3002/v1/todos`)
           .then(res=> angular.copy(res.data, storage._todos))
           .catch(err=> angular.copy([], storage._todos));
      return storage._todos;
    },
    remove: todo => {
      $http.delete(`http://localhost:3002/v1/todos/${todo.id}`)
           .then(() => angular.copy(storage._todos.filter(t=>t.id!==todo.id), storage._todos))
           .catch(e => alert(JSON.stringify(e)))
    },
    create: title => {
      $http.post('http://localhost:3002/v1/todos', {title: title, done: false})
           .then(res=> storage._todos.push(res.data))
           .catch(e => alert(JSON.stringify(e)))
    },
    update: todo => {
      $http.put(`http://localhost:3002/v1/todos/${todo.id}`, todo)
           .then(res => storage._todos.filter(t => t.id === todo.id)[0] = res.data)
           .catch(e => alert(JSON.stringify(e)))
    }
  };
  return storage;
})
