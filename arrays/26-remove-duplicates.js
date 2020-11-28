// Leetcode #26 Remove duplicates from sorted array

var removeDuplicates = function(nums) {
  if (nums.length == 0) return 0;
  
  var i = 0;
  for (j = 1; j < nums.length; j++) {
      if (nums[j] != nums[i]) {
          i++;
          nums[i] = nums[j];
      }
  }
  
  return i + 1;
};

var nums = [1,1,2]
console.log(removeDuplicates([1,1,2]))