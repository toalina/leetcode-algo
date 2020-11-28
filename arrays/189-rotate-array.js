// Leetcode #189 Rotate Array 

function rotate (nums, k) {
  for (i = 0; i < k; i++) {
    nums.unshift(nums.pop(nums[i]))
  }

  return nums;
}

var nums = [1,2,3,4,5,6,7]
var k = 3
console.log(rotate(nums, k));