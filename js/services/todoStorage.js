angular.module('todomvc').factory('todoStorage', () => {
  const storage = {
    _key: 'todomvc',
    _todos: [],
    _getLocalStorage: () => JSON.parse(localStorage.getItem(storage._key)),
    _putLocalStorage: () => {
      localStorage.setItem(storage._key, JSON.stringify(storage._todos));
    },
    get: () => {
      storage._todos = storage._getLocalStorage() || [];
      return storage._todos;
    },
    remove: todo => {
      angular.copy(
        storage._todos.filter(t => t.id !== todo.id),
        storage._todos);
      storage._putLocalStorage();
    },
    create: title => {
      storage._todos.push({
        id: Date.now(),
        title: title,
        done: false,
        createdAt: Date.now()
      });
      storage._putLocalStorage();
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
