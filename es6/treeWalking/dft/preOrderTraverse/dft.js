/**
 * Pre-Order Depth First Tree Traversal
 * 
 * Algorithm Preorder(tree)
 * 1. Visit the root.
 * 2. Traverse the left subtree, i.e., call Preorder(left-subtree)
 * 3. Traverse the right subtree, i.e., call Preorder(right-subtree)
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

  document.write(`${node.key} `);
  
  dft(node.left);

  dft(node.right);
};


const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

document.write("Pre-order depth traversal of binary tree is ");
dft(root);
