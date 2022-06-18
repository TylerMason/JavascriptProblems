/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var invertTree = function(root) {

    // base case to make sure a root even exists
    if (!root) return root;
    
    // Set the variable to be their left and right correspondingly
    const left = root.left;
    const right = root.right;
    
    // We then switch them by calling assigning the respective side

    const invertedLeft = invertTree(left);
    const invertedRight = invertTree(right);

    /*
    It is also possible to use the assignments up above on the assignements down below
    if you want to save line space and make it look cleaner.
    */
    
    // reassign but with opposite sides
    root.left = invertedRight;
    root.right = invertedLeft;
    
    return root;
};

