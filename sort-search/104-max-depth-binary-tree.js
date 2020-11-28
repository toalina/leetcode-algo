function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

function maxDepth(root) {
  if (!root) return 0;

  let a = maxDepth(root.left);
  let b = maxDepth(root.right);

  return Math.max(a, b) + 1;
}