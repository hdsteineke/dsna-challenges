const { push } = require('./app.js');

test('push', () => {
  const arr = ['a', 'b', 'c'];
  const newArr = push(arr, 'z');
  console.log('arr', arr);
  expect(arr).toEqual(['a', 'b', 'c', 'z'])
});