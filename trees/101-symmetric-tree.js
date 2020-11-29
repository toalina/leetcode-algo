function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

function symmetricIterative(root) {
  if (root == null) return true;
    
  // BFS - iterative
  let queue = [root, root];
  
  while (queue.length > 0) {
      let node1 = queue.shift();
      let node2 = queue.shift();
      
      if (node1 == null && node2 == null) continue;
      if (node1 == null || node2 == null) return false;
      if (node1.val !== node2.val) return false;
      
      queue.push(node1.left, node2.right)
      queue.push(node1.right, node2.left)
  }
  
  return true;
}

function symmetricRecursive(root) {
  // DFS - recursive
  var isMirror = function(node1, node2) {
      if (node1 == null && node2 == null) return true;
      if (node1 == null || node2 == null) return false;

      return node1.val == node2.val && isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);
  }

  return isMirror(root.left, root.right)
  
}
