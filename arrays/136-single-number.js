function singleNumberIterative(nums) {
  nums.sort((a, b) => a - b)
  for(let i=0; i<nums.length; i+=2) {
    if(nums[i] !== nums[i+1]) {
        return nums[i]
    }
  }
}

function singleNumberHash(nums) {
  let map = new Map();
    
  for (const number of nums) {
    map.set(number, map.get(number) + 1 || 1);
  }
  
  for (i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) === 1) {
      return nums[i];
    }
  }
}

var nums = [2,2,1];
console.log(singleNumberIterative(nums));
console.log(singleNumberHash(nums));