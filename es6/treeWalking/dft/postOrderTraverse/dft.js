/**
 * Post-Order Depth First Tree Traversal
 * 
 * Algorithm Postorder(tree)
 * 1. Traverse the left subtree, i.e., call Postorder(left-subtree)
 * 2. Traverse the right subtree, i.e., call Postorder(right-subtree)
 * 3. Visit the root.
 */

'use strict';

class Node {
  constructor(val) {
      this.key = val;
      this.left = null;
      this.right = null;
  }
}

const dft = (node) => {
  if (!node) return;
  
  dft(node.left);
  
  dft(node.right);
  
  document.write(`${node.key} `);
};


const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

document.write("Post-order depth traversal of binary tree is ");
dft(root);
