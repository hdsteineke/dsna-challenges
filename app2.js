function addFirst(element) {
  //takes an element 

  //returns a function
    return function addItem(arr) {
      return [element, ...arr];
    }
    //function takes an array
    //and returns a new array with element as the first index, followed by the rest 
  // return addItem();
}



module.exports = { addFirst };