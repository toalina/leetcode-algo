function intersect(nums1, nums2) {
  let map = new Map();
  let result = [];

  for (const number of nums1) {
    map.set(number, map.get(number) + 1 || 1) 
  }

  for (const number of nums2) {
    if (map.get(number) >= 1) {
      result.push(number);
      map.set(number, map.get(number) - 1) 
    }
  }

  return result;
}

var nums1 = [1,2,2,1]
var nums2 = [2,2]
console.log(intersect(nums1, nums2))