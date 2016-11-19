angular.module('todomvc').factory('todoStorage', ($http) => {
  const storage = {
    _key: 'todomvc',
    _todos: [],
    _getLocalStorage: () => JSON.parse(localStorage.getItem(storage._key)),
    _putLocalStorage: () => {
      localStorage.setItem(storage._key, JSON.stringify(storage._todos));
    },
    get: () => {
      $http.get('http://localhost:3002/v1/todos')
           .then(res=> angular.copy(res.data, storage._todos))
           .catch(err=> angular.copy([], storage._todos));
      return storage._todos;
    },
    remove: todo => {
      angular.copy(
        storage._todos.filter(t => t.id !== todo.id),
        storage._todos);
      storage._putLocalStorage();
    },
    create: title => {
      $http.post('http://localhost:3002/v1/todos', {title: title, done: false})
           .then(res=> storage._todos.push(res.data));
    },
    update: todo => {
      const found = storage._todos.filter(t => t.id === todo.id)[0];
      found.title = todo.title;
      found.done = todo.done;
      storage._putLocalStorage();
    }
  };
  return storage;
})
