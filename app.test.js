const { push, pop, unshift, shift } = require('./app.js');

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

test('shift', () => {
  const arr = ['cat', 'dog', 'bunny'];
  const newArr = shift(arr);

  const colors = ['blue', 'red', 'green'];
  const newColors = shift(colors);

  expect(newArr).toEqual('cat');
  expect(newColors).toEqual('blue');
})