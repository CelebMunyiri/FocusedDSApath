//HASHMAP
//A map is a key value pair
let map={}
map['key1']=20;
console.log(map['key1'])
map['key2']=10;
map['key3']=30;

//find if a key exist returns a boolean
console.log('key3' in map)//logs true
//delete a key and its value
delete map['key3'];
console.log( 'key3' in map)//logs false

//Hashmaps are mostly used in situations such as counting occurrences of elements in an array
//Example:
let array = [1,2,3,2,1,3,4,4,5];
let countMap = {};

//Loop through the array and count accurence of each element
array.forEach(element=>{
    if(countMap[element]=== undefined){
        countMap[element] = 1;
    } else{
        countMap[element]++;
    }

})
//Log For the count of each element
for(let key in countMap){
    console.log(`Element ${key} occurs ${countMap[key]} times`)
}
//counting elements for nested arrays
let arrays = [[1, 2, 3], [2, 3, 4], [3, 4, 5]];

let countMapp = {};

// Loop through the outer array and inner arrays
arrays.forEach(innerArray => {
  innerArray.forEach(element => {
    if (countMapp[element] === undefined) {
      countMapp[element] = 1;
    } else {
      countMapp[element]++;
    }
  });
});

// Log the count for each element
for (let key in countMap) {
  console.log(`Element ${key} occurs ${countMap[key]} times`);
}

//This problem uses both hashmap and array
//PROBLEM
/*
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
 

Constraints:

1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000
*/

//SOLUTION
function uniqueOccurrences(arr) {
    let countMap=new Map();

    for(let num of arr){
        countMap.set(num, (countMap.get(num) ||0)+1)
    }

    const occurrences = Array.from(countMap.values());
    const uniqueOccurences = new Set(occurrences);

    return uniqueOccurences.size === occurrences.length;
    

};

// Example 1
const arr1 = [1, 2, 2, 1, 1, 3];
console.log(uniqueOccurrences(arr1));  // Output: true

// Example 2
const arr2 = [1, 2];
console.log(uniqueOccurrences(arr2));  // Output: false

// Example 3
const arr3 = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0];
console.log(uniqueOccurrences(arr3));  // Output: true
//Explanation
/*
Counting Occurrences:

We use a Map object countMap to store the count of each element in the array.
We iterate through the array and update the count for each element in the map. If the element is not present in the map, we initialize its count to 1, otherwise, we increment its existing count.
Checking Uniqueness of Counts:

We convert the counts from the map to an array using Array.from(countMap.values()).
We create a Set from this array of counts, which will automatically remove any duplicates.
We then compare the length of the array of counts with the size of the set. If they are the same, it means all counts are unique.
This JavaScript solution follows the same logic as the Python solution and efficiently checks for the uniqueness of occurrence counts.
*/