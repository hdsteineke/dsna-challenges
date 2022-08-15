const { push, pop, unshift } = require('./app.js');

test('push', () => {
  const arr = ['a', 'b', 'c'];
  const newArr = push(arr, 'z');
  console.log('arr', arr);
  expect(arr).toEqual(['a', 'b', 'c', 'z']);
  expect(arr.length).toEqual(4);
});

test('pop', () => {
  const arr = ['red', 'yellow', 'blue', 'green'];
  const newArr = pop(arr);
  expect(newArr).toEqual('green');
})

test('unshift', () => {
  const arr = ['cat', 'dog'];
  const newArr = unshift(arr, 'bunny');

  const colors = ['yellow', 'blue', 'purple'];
  const newColors = unshift(colors, 'green');
  expect(newArr).toEqual(3);
  expect(newColors).toEqual(4);
})