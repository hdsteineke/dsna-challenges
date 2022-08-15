const { push, pop } = require('./app.js');

test('push', () => {
  const arr = ['a', 'b', 'c'];
  const newArr = push(arr, 'z');
  console.log('arr', arr);
  expect(arr).toEqual(['a', 'b', 'c', 'z'])
});

test('pop', () => {
  const arr = ['red', 'yellow', 'blue', 'green'];
  const newArr = pop(arr);
  expect(newArr).toEqual('green');
})