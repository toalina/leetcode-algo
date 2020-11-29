function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

function validateBST(root) {
  if (!root) return true;
  function validate(root, max, min) {
    if (root == null) return true;
    if (root.val >= max || root.val <= min) {
      return false;
    } else {
      return validate(root.left, root.val, min) && validate(root.right, max, root.val)
    }
  }

  return validate(root, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY)
}