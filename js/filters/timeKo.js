angular.module('todomvc').filter('timeKo', () => {
  return str => {
    if (!str) return '';
    const date = new Date(str);
    return [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    ].join(':')
  };
});
