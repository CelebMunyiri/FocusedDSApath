'use strict';

function findSum(arr, num) {
  // create an empty object to store each element of the array as a key and its index as a value
  const numIndex = {};
  
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // calculate the difference between the input number and the current element
    const difference = num - arr[i];
    
    // check if the difference already exists as a key in the numIndex object
    if (numIndex[difference] !== undefined) {
      // if it does, return the current index and the index of the matching difference
      return [numIndex[difference], i];
    }
    
    // if the difference doesn't exist as a key, add the current element and its index to the numIndex object
    numIndex[arr[i]] = i;
  }
  
  // if no matching indices were found, return null
  return null;
}
console.log(findSum([1,2,3,4,9,6],8))
