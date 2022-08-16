const { addFirst } = require('./app2.js');

test('add-first-element', () => {
  const addOrange = addFirst('orange');
  expect(addOrange(['banana', 'grape'])).toEqual(['orange', 'banana', 'grape']);
})