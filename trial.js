'use strict';
//quiz
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?*/
/*
function twoSum(nums, target) {
    const hashTable = {};
    
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      
      if (complement in hashTable) {
        return [hashTable[complement], i];
      }
      
      hashTable[nums[i]] = i;
    }
    
    return [];
  }
  
  console.log(twoSum([2, 7, 11, 15], 9));  // Output: [0, 1]
  console.log(twoSum([3, 2, 4], 6));       // Output: [1, 2]
  console.log(twoSum([3, 3], 6));          // Output: [0, 1]
  
 //quiz 2
 Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
 

Constraints:

1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6*/

let nums=[1,1,1,1,1] //expected output=5
const runningSum=function(arr){
while(arr.length>1 && arr.length<=1000){
    const runningSum=[]
    let sum=0;
    for(let i=0;i<arr.length;i++){
sum=sum+arr[i]
runningSum.push(sum)
    }
    return runningSum;

}
}
console.log(runningSum(nums));