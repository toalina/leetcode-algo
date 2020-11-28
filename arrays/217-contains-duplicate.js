// Leetcode #217 contains duplicate 

function containsDupicate(nums) {
  let map = new Map();
    
  for (const number of nums) {
      map.set(number, map.get(number) + 1 || 1);
  }
  
  for (const number of nums) {
      if (map.get(number) > 1) {
          return true;
      }
  }
  
  return false;
}

var nums = [1,2,3,1];
console.log(containsDupicate(nums));