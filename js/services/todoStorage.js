angular.module('todomvc').factory('todoStorage', () => {
  let storage = {
    _todos: [
      {
        id: 1,
        title: 'angular study',
        done: false,
        createdAt: Date.now() - 3600 * 1000
      },
      {
        id: 2,
        title: 'cleaning room',
        done: true,
        createdAt: Date.now() - 3600 * 2000
      },
      {
        id: 3,
        title: 'yoga',
        done: false,
        createdAt: Date.now() - 3600 * 3000
      }
    ],
    get: () => storage._todos
  };
  return storage;
})
