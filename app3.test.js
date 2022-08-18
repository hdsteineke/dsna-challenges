const { BinaryTreeNode } = require('./app3.js');

test('add', () => {
  const B = new BinaryTreeNode('B');
  const A = new BinaryTreeNode('A');
  B.add(A);
  expect(B.left).toEqual(A);
})