function addFirst(element) {
  //takes an element 

  //returns a function that takes an array
    return function addItem(arr) {
      //and returns a new array with element as the first index, followed by the rest 
      return [element, ...arr];
    }
  // return addItem();
}

//arrow notation version of addFirst function (above)
const betterAddFirst = (element) => (arr) => [element, ...arr];


function addPunctuation(punctuation) {
  return function addEmotion(string) {
    return `${string}` + `${punctuation}`
  }
}

const betterAddPunctuation = (punctuation) => (string) => `${string}` + `${punctuation}`;


module.exports = { addFirst, betterAddFirst, addPunctuation, betterAddPunctuation };