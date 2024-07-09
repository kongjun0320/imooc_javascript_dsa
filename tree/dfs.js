const root = require('./TreeNode');

/*

{
  "value": "0",
  "children": [
    {
      "value": "1",
      "children": [
        {
          "value": "3",
          "children": []
        },
        {
          "value": "4",
          "children": []
        }
      ]
    },
    {
      "value": "2",
      "children": [
        {
          "value": "5",
          "children": []
        }
      ]
    }
  ]
}

*/

// 0 1 3 4 2 5
function recursiveDFS(root) {
  if (!root) return;
  console.log(root.value);
  root.children.forEach(recursiveDFS);
}

function iterativeDFS(root) {
  if (!root) return;

  const stack = [root];

  while (stack.length > 0) {
    const currentNode = stack.pop();
    console.log(currentNode.value);
    for (let i = currentNode.children.length - 1; i >= 0; i--) {
      stack.push(currentNode.children[i]);
    }
  }
}

// recursiveDFS(root);
iterativeDFS(root);
