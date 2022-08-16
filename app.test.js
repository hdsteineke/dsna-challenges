const { push, pop, unshift, shift, hasDuplicates, betterHasDuplicates, multiplesOfN } = require('./app.js');

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

test('hasDuplicates', () => {
  const arr = ['cat', 'dog', 'bunny', 'cat'];
  const newArr = hasDuplicates(arr);

  expect(newArr).toEqual(true);
})

test('betterHasDuplicates', () => {
  const arr = ['cat', 'dog', 'bunny', 'cat'];
  const newArr = betterHasDuplicates(arr);

  expect(newArr).toEqual(true);
})

test('multiplesOfN', () => {
  const newArr = multiplesOfN(10);
  const nextArr = multiplesOfN(25)
  const zeroArr = multiplesOfN(0)

  expect(newArr).toEqual([10, 20, 30, 40, 50]);
  expect(nextArr).toEqual([25, 50]);
  expect(zeroArr).toEqual([]);
})