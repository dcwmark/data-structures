/**
 * Breadth First Tree Traversal by queue
 */

'use strict';

class Node {
  constructor(val) {
      this.data = val;
      this.left = null;
      this.right = null;
  }
}

const bft = () => {
  const queue = [];
  queue.push(root);

  while(queue.length) {
    const tempNode = queue.shift();
    document.write(tempNode.data + ' ');

    if (tempNode.left) {
      queue.push(tempNode.left);
    }

    if (tempNode.right) {
      queue.push(tempNode.right);
    }
  }
};

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

document.write("Level queue traversal of binary tree is ");
bft();
