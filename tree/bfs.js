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

// 0 1 2 3 4 5
function bfs(root) {
  if (!root) return;
  const queue = [root];
  while (queue.length > 0) {
    const currentNode = queue.shift();
    console.log(currentNode.value);
    currentNode.children.forEach((child) => queue.push(child));
  }
}

bfs(root);
