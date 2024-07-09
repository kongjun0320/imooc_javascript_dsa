// 定义一个树节点类
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  // 添加子节点
  addChild(child) {
    this.children.push(child);
  }
}

// 创建树
const root = new TreeNode('0');

// 添加子节点
const child1 = new TreeNode('1');
const child2 = new TreeNode('2');
const child3 = new TreeNode('3');
const child4 = new TreeNode('4');
const child5 = new TreeNode('5');

root.addChild(child1);
root.addChild(child2);
child1.addChild(child3);
child1.addChild(child4);
child2.addChild(child5);

console.log(JSON.stringify(root, null, 2));

module.exports = root;
