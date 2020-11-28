// Leetcode #1 two sum 

function twoSum(nums, target) {
  const map = new Map();
    
  for (i = 0; i < nums.length; i++) {
      const number = nums[i];
      const complement = target - number;

      if (map.has(complement)) {
        return [i, map.get(complement)]
      }
      
      map.set(number, i)
  }
}

var nums = [2,7,11,15]
var target = 9
console.log(twoSum(nums, target))