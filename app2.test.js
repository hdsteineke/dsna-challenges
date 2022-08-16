const { addFirst, betterAddFirst } = require('./app2.js');

test('add-first-element', () => {
  const addOrange = addFirst('orange');
  expect(addOrange(['banana', 'grape'])).toEqual(['orange', 'banana', 'grape']);
})

test('better-add-first-element', () => {
  const addPear = betterAddFirst('pear');
  expect(addPear(['banana', 'grape'])).toEqual(['pear', 'banana', 'grape']);
})