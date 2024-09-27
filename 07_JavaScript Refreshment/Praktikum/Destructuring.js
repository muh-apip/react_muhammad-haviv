const reverseFirstTwo = ([a, b]) => {

  return [b, a];

}

const originalArray = [10, 20, 30, 40];
const reverseArray = reverseFirstTwo(originalArray);

console.log(reverseArray);