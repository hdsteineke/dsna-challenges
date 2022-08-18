const { addFirst, betterAddFirst, addPunctuation, betterAddPunctuation, rootSumDigit, every, fib, filter  } = require('./app2.js');

test('add-first-element', () => {
  const addOrange = addFirst('orange');
  expect(addOrange(['banana', 'grape'])).toEqual(['orange', 'banana', 'grape']);
})

test('better-add-first-element', () => {
  const addPear = betterAddFirst('pear');
  expect(addPear(['banana', 'grape'])).toEqual(['pear', 'banana', 'grape']);
})

test('add-punctuation', () => {
  const addConfusion = addPunctuation('..?');
  expect(addConfusion('huh')).toEqual('huh..?');
})

test('better-add-punctuation', () => {
  const addAnger = betterAddPunctuation('@$#%');
  expect(addAnger('what the ')).toEqual('what the @$#%');
})

test('digits-root-sum', () => {
 expect(rootSumDigit(12)).toEqual(3);
})

test('every', () => {
  expect(every([2, 4, 6], n => n % 2 === 0)).toEqual(true);
})

test('fibonacci', () => {
  expect(fib(4)).toEqual(3);
})

test('filter', () => {
  expect(filter([1, 2, 3, 4], n => n % 2 === 0)).toEqual([2, 4]);
})