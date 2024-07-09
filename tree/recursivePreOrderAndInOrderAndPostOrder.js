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
function preOrder(root) {
  if (!root) return;
  console.log(root.value);
  preOrder(root.left);
  preOrder(root.right);
}

// preOrder(root);

// 3 1 4 0 5 2
function inOrder(root) {
  if (!root) return;
  inOrder(root.left);
  console.log(root.value);
  inOrder(root.right);
}

// inOrder(root);

// 3 4 1 5 2 0
function postOrder(root) {
  if (!root) return;
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.value);
}

postOrder(root);
