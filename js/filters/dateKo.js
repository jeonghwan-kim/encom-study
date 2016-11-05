angular.module('todomvc').filter('dateKo', () => {
  return str => {
    if (!str) return '';
    const date = new Date(str);
    return [
      date.getFullYear().toString().substring(2, 4),
      date.getMonth() + 1,
      date.getDate()
    ].join('/')
  };
});
