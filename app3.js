
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
  add(node) {
    // Implement me!
    //Im given a node that I want to add to a tree
    //the first thing I do is look at the value of the root 
    //then I compare it against the value I'm given.
    //if the value I'm given precedes the root
        // place the value to the left of the tree
    // if the value comes after the root, place it to the right



    if (this.value > node.value) {
      //left route
      if (!this.left) this.left = node;
      else this.left.add(node);
    } else {
      //right route
      if (!this.right) this.right = node;
      else this.right.add(node);
    }
  }
}




module.exports = { BinaryTreeNode }