function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

function convertSortedArray(nums) {
  if (nums.length == 0) return [];
  if (nums.length == 1) return new TreeNode(nums[0]);

  let mid = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[mid]);

  let leftSubtree = convertSortedArray(nums.splice(0, mid));
  let rightSubtree = convertSortedArray(nums.splice(mid+1, nums.length));

  root.left = leftSubtree;
  root.right = rightSubtree;

  return root;
}