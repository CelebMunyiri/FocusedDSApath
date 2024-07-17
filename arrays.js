'use strict';
//ANALYZING PERFORMANCE OF ARRAYS
//OBJECTIVES
//1.UNDERSTAND HOW ARRAYS WORK
//2.EXPLAIN WHY ADDINGELEMENTS TO THE BEGINNING OF ARRAY IS COSTLY
//3.COMPARE AND CONTRAST RUNTIME FOR ARRAYS AND OBJECTS AS WELL
//4.AS WELL AS BUILT IN METHODS

//OBJECTS
//UNORDERED KEY VALUE PAIRS,
//EXAMPLE
let instructor={
    firstName:'David',
    isInstructor:true,
    favoriteItemNumber:[1,2,3,4],
};
//objects have quick access of elements that is insertion and removal
//Good when you dont need order
//BIG O OF OBJECTS IS AS BELOW
//insertion=0(1)
//removal=0(1)
//Searching=0(N)   this is linear time
//Access=0(1)

//OBJECT METHODS
//Object.keys=0(n)
//Object.values=0(n)
//Object.entries=0(n)
//hasOwnProperty=0(1)

console.log(Object.keys(instructor))// ['firstName','isInstructor','favoriteNumber']
console.log(Object.values(instructor))// ['David','true',[1,2,3,4]]
console.log(Object.entries(instructor))//[['firstName','David'],['isInstructor',true],['favoriteNumbers',[1,2,3,4]]]
console.log(instructor.hasOwnProperty('firstName'))//true

//WHEN ARE ARRAYS SLOW
//Ordered list
let names=['Michael','Melissa','Andrea'];
let values=[true,{},[],2,'awesome'];
//use arrays when you need order
//use arrays when you need fast access /insertion and removal (sort of...)
//INSERTION
names.push('Rajubai')//['Michael','Melissa','Andrea','Rajubai'];
names.pop()//['Michael','Melissa','Andrea']
names.unshift('Munyiri')//['Munyiri','Michael','Melissa',Andrea']
names.shift()//[ 'Michael', 'Melissa', 'Andrea' ]

//push and pop are fast than shift and unshift

//BIG O OF ARRAY OPERATIONS
//.push=0(1)
//.pop=0(1)
//.shift=0(n)
//.unshift=0(n)
//.concat=0(n)
//.slice=0(n)
//.splice=0(n)
//.sort=0(n*log n)
//forEach/map/filter/reduce =0(n)
//names=names.concat([5,6,7]); //[ 'Michael', 'Melissa', 'Andrea', 5, 6, 7 ]

//console.log(names.slice(0,1))// new array [ 'Michael' ]
names.splice(0,1,'Kimsha')//[ 'Kimsha', 'Michael', 'Melissa', 'Andrea' ]

//TWO DIMENSIONAL ARRAYS
const matrix = [[1,2,3],[4,5,6],[7,8,9]]

for(let row of matrix){
    const rowString = row.join(" ")
    console.log(rowString)
}

//finding maximum area of a grid
//PROBLEM
/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
*/
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
  
    while (left < right) {
      // Calculate the area
      const width = right - left;
      const area = Math.min(height[left], height[right]) * width;
      maxArea = Math.max(maxArea, area);
  
      // Move the pointers
      if (height[left] < height[right]) {
        left++;
      } else {
        right--;
      }
    }
  
    return maxArea;
  }
  
  // Example Usage
  const height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  console.log(maxArea(height1)); // Output: 49
  
  const height2 = [1, 1];
  console.log(maxArea(height2)); // Output: 1


//TASTINESS OF CANDY PROBLEM
/*
You are given an array of positive integers price where price[i] denotes the price of the ith candy and a positive integer k.

The store sells baskets of k distinct candies. The tastiness of a candy basket is the smallest absolute difference of the prices of any two candies in the basket.

Return the maximum tastiness of a candy basket.

 

Example 1:

Input: price = [13,5,1,8,21,2], k = 3
Output: 8
Explanation: Choose the candies with the prices [13,5,21].
The tastiness of the candy basket is: min(|13 - 5|, |13 - 21|, |5 - 21|) = min(8, 8, 16) = 8.
It can be proven that 8 is the maximum tastiness that can be achieved.
Example 2:

Input: price = [1,3,1], k = 2
Output: 2
Explanation: Choose the candies with the prices [1,3].
The tastiness of the candy basket is: min(|1 - 3|) = min(2) = 2.
It can be proven that 2 is the maximum tastiness that can be achieved.
Example 3:

Input: price = [7,7,7,7], k = 2
Output: 0
Explanation: Choosing any two distinct candies from the candies we have will result in a tastiness of 0.
 

Constraints:

2 <= k <= price.length <= 105
1 <= price[i] <= 109
*/
function maximumTastiness(price, k) {
    function canPickWithMinDiff(d) {
        let count = 1;  // Start by picking the first candy
        let lastPicked = price[0];

        for (let i = 1; i < price.length; i++) {
            if (price[i] - lastPicked >= d) {
                count++;
                lastPicked = price[i];
                if (count === k) {
                    return true;
                }
            }
        }

        return false;
    }

    // Sort the prices
    price.sort((a, b) => a - b);

    // Binary search for the maximum minimum difference
    let left = 0;
    let right = price[price.length - 1] - price[0];
    let bestDiff = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (canPickWithMinDiff(mid)) {
            bestDiff = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return bestDiff;
}

// Example usage
const price = [13, 5, 1, 8, 21, 2];
const k = 3;
console.log(maximumTastiness(price, k));  // Output: 8

