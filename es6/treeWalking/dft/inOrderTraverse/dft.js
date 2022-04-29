/**
 * In-Order Depth First Tree Traversal
 * 
 * Algorithm Inorder(tree)
 * 1. Traverse the left subtree, i.e., call Inorder(left-subtree)
 * 2. Visit the root.
 * 3. Traverse the right subtree, i.e., call Inorder(right-subtree)
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

  document.write(`${node.key} `);

  dft(node.right);
};


const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

document.write("In-order depth traversal of binary tree is ");
dft(root);
