/**
 * Breadth First Tree Traversal
 */

'use strict';

class Node {
  constructor(val) {
      this.data = val;
      this.left = null;
      this.right = null;
  }
}

const height = (root) => {
  if (!root) {
    return 0;
  }

  const lHeight = height(root.left);
  const rHeight = height(root.right);

  if (lHeight > rHeight) {
    return lHeight + 1;
  } else {
    return rHeight + 1;
  }
};

const printCurrentLevel = (root, level) => {
  if (!root) return;

  if (level === 1) {
    document.write(`${root.data} `);
  } else if (level > 1) {
    printCurrentLevel(root.left, level - 1);
    printCurrentLevel(root.right, level - 1);
  }
};


const bft = () => {
  const h = height(root);
  console.log(`***** h:: `, h);

  for (let i = 0; i <= h; i++) {
    printCurrentLevel(root, i);
  }
};

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

document.write("Level order traversal of binary tree is ");
bft();
