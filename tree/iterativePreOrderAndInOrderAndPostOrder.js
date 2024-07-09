const root = require('./binaryTreeNode');

/*

{
  "value": 0,
  "left": {
    "value": 1,
    "left": {
      "value": 3,
      "left": null,
      "right": null
    },
    "right": {
      "value": 4,
      "left": null,
      "right": null
    }
  },
  "right": {
    "value": 2,
    "left": {
      "value": 5,
      "left": null,
      "right": null
    },
    "right": null
  }
}

               0
        1             2
   3        4     5          
*/

// 0 1 3 4 2 5
function iterativePreOrder(root) {
  const stack = [root];
  while (stack.length > 0) {
    const currentNode = stack.pop();
    if (currentNode !== null) {
      console.log(currentNode.value);
      stack.push(currentNode.right);
      stack.push(currentNode.left);
    }
  }
}

// iterativePreOrder(root);

// 3 1 4 0 5 2
function iterativeInOrder(root) {
  const stack = [];
  let p = root;
  while (stack.length > 0 || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    const currentNode = stack.pop();
    console.log(currentNode.value);
    p = currentNode.right;
  }
}

// iterativeInOrder(root);

// 3 4 1 5 2 0
function iterativePostOrder(root) {
  const stack = [];
  const output = [];
  stack.push(root);

  while (stack.length > 0) {
    const currentNode = stack.pop();
    if (currentNode !== null) {
      output.push(currentNode.value);
      stack.push(currentNode.left);
      stack.push(currentNode.right);
    }
  }

  while (output.length > 0) {
    console.log(output.pop());
  }
}

iterativePostOrder(root);
