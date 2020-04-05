/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
  let depth = 0;
  let content = root.length + 1;
  while (content > 1) {
    content /= 2;
    depth++;
  }
  return depth;
};

console.log(maxDepth([3, 9, 20, null, null, 15, 7]));
