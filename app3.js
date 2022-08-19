
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



class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }

  add(node) {
    // implemented as in previous challenge
    if (this.value > node.value) {
      if (!this.left) this.left = node;
      else this.left.add(node);
    } else {
      if (!this.right) this.right = node;
      else this.right.add(node);
    }
  }

  findPerson(name) {
    // Implement me!
    //check if name matches the current node value?
    if (this.value === name) return this.person;
    //if name is less than current node value check if node.left exists
    else if (this.value > name) {
      //if not, the person is not in the tree
      if (!this.left) return 'not found';
      //if so, we need to shift down to this left node to check if the value is equal to the name ('rinse and repeat' 54-58)
      else this.left.add(node);

    //if name is greater than current node value
    } else {
      //check if node.right exists. If not, the person is not in the tree
      if (!this.right) return 'not found';
      //if node.right exists, shift down to the right node to rinse and repeat
      else this.right.add(node);
    }
    }
  }





module.exports = { BinaryTreeNode }