"use strict";
//PROBLEM STATEMENT [Medium]
/*
Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".
*/
//SOLUTION
function longestSubstringWithKDistinct(s, k) {
    if (k === 0) return 0;

    let charCount = {};
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        charCount[char] = (charCount[char] || 0) + 1;

        while (Object.keys(charCount).length > k) {
            let leftChar = s[left];
            charCount[leftChar]--;
            if (charCount[leftChar] === 0) {
                delete charCount[leftChar];
            }
            left++;
        }

        let currentLength = right - left + 1;
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
}

// Test case
let s = "abcba";
let k = 2;
console.log(longestSubstringWithKDistinct(s, k));  // Output: 3 ("bcb")

//PROBLEM STATEMENT 
//INTERVIEW QUESTION ASKED BY GOOGLE
//The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.[Hard]

//Hint: The basic equation of a circle is x2 + y2 = r2.
//Understanding Problem and explanation
/*
Understanding the problem:

We need to estimate the value of π using random sampling.
Imagine a circle of radius 
𝑟
r inscribed in a square. The side length of the square is 
2
𝑟
2r.
The area of the circle is 
𝜋
𝑟
2
πr 
2
 .
The area of the square is 
(
2
𝑟
)
2
=
4
𝑟
2
(2r) 
2
 =4r 
2
 .
Random Sampling:

Generate random points within the square.
Count the number of points that fall inside the circle.
The ratio of points inside the circle to the total number of points will approximate the ratio of the area of the circle to the area of the square (i.e., 
𝜋
/
4
π/4).
Mathematical Formulation:

The equation of a circle centered at the origin with radius 
𝑟
r is 
𝑥
2
+
𝑦
2
=
𝑟
2
x 
2
 +y 
2
 =r 
2
 .
A point 
(
𝑥
,
𝑦
)
(x,y) is inside the circle if 
𝑥
2
+
𝑦
2
≤
𝑟
2
x 
2
 +y 
2
 ≤r 
2
 .
Estimate π:

Use the ratio 
(
𝑛
𝑢
𝑚
𝑏
𝑒
𝑟
_
𝑖
𝑛
𝑠
𝑖
𝑑
𝑒
_
𝑐
𝑖
𝑟
𝑐
𝑙
𝑒
/
𝑡
𝑜
𝑡
𝑎
𝑙
_
𝑛
𝑢
𝑚
𝑏
𝑒
𝑟
_
𝑜
𝑓
_
𝑝
𝑜
𝑖
𝑛
𝑡
𝑠
)
(number_inside_circle/total_number_of_points) to estimate 
𝜋
/
4
π/4.
Multiply this ratio by 4 to get the estimate of π.*/
//Solution

function estimatePi(numPoints) {
    let pointsInsideCircle = 0;
    
    for (let i = 0; i < numPoints; i++) {
        // Generate random point (x, y) in the square [-1, 1] x [-1, 1]
        let x = Math.random() * 2 - 1;
        let y = Math.random() * 2 - 1;
        
        // Check if the point is inside the circle
        if (x * x + y * y <= 1) {
            pointsInsideCircle++;
        }
    }
    
    // Calculate the ratio of points inside the circle to the total number of points
    let piEstimate = (pointsInsideCircle / numPoints) * 4;
    
    return piEstimate.toFixed(3);
}

// Example usage
let numPoints = 1000000; // You can increase or decrease the number of points
let piEstimate = estimatePi(numPoints);
console.log(`Estimated value of π: ${piEstimate}`);

//PROBLEM 13 [Medium]
/*
There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

1, 1, 1, 1
2, 1, 1
1, 2, 1
1, 1, 2
2, 2
What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.
*/

//SOLUTION
//Approach 1 using dynamic programming Array
function climbStairs(n) {
    if (n === 0) return 1;
    if (n === 1) return 1;

    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

// Example usage:
console.log(climbStairs(4)); // Output: 5
//Approach 2 using a Set
function climbStairsWithSet(n, X) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1; // One way to be at the ground level

    for (let i = 1; i <= n; i++) {
        for (let step of X) {
            if (i - step >= 0) {
                dp[i] += dp[i - step];
            }
        }
    }

    return dp[n];
}

// Example usage:
const X = [1, 3, 5];
console.log(climbStairsWithSet(4, X)); // Output: 3  

//QUIZ 15[HARD]
/*
Given a stream of elements too large to store in memory, pick a random element from the stream with uniform probability.

*/
//SOLUTION 
function reservoirSampling(stream) {
    let selectedElement = null;
    let count = 0;

    for (const element of stream) {
        count++;
        // Randomly replace the current selected element with the new one
        if (Math.random() < 1 / count) {
            selectedElement = element;
        }
    }

    return selectedElement;
}

// Example usage:
const stream = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(reservoirSampling(stream)); // Random element from the stream

//LEETCODE THREE SUM ARRAY

function threeSum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        
    }
} 

//PROBLEM
/*
A builder is looking to build a row of N houses that can be of K different colors. He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.

Given an N by K matrix where the nth row and kth column represents the cost to build the nth house with kth color, return the minimum cost which achieves this goal. */
//SOLUTION
function minCost(costs) {
    if (costs.length === 0) return 0;
    
    const N = costs.length;
    const K = costs[0].length;

    // Create a DP array with the same dimensions as costs
    let dp = Array.from({ length: N }, () => Array(K).fill(0));

    // Initialize the first row of dp with the first row of costs
    for (let j = 0; j < K; j++) {
        dp[0][j] = costs[0][j];
    }

    // Fill the DP table
    for (let i = 1; i < N; i++) {
        for (let j = 0; j < K; j++) {
            dp[i][j] = costs[i][j] + Math.min(...dp[i-1].filter((_, idx) => idx !== j));
        }
    }

    // The answer is the minimum value in the last row of dp
    return Math.min(...dp[N-1]);
}

// Example usage:
const costs = [
    [1, 5, 3],
    [2, 9, 4],
    [3, 6, 1]
];

console.log(minCost(costs)); // Output: 5
///EXPLANATION
/*
Initialization:

We initialize the first row of the dp array with the first row of the costs array because the cost of painting the first house with any color is just the given cost.
DP Table Population:

For each house from the second to the last, and for each color, we calculate the minimum cost of painting the house with that color. This is done by taking the current cost and adding it to the minimum cost of painting the previous house with a different color.
Result:

The final result is the minimum value in the last row of the dp array, representing the minimum cost to paint all houses under the given constraints.

*/




