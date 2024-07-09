// 定义一个二叉树节点类
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // 添加左子节点
  addLeft(child) {
    this.left = child;
  }

  // 添加右子节点
  addRight(child) {
    this.right = child;
  }
}

// 创建二叉树
const root = new BinaryTreeNode(0);
const child1 = new BinaryTreeNode(1);
const child2 = new BinaryTreeNode(2);
const child3 = new BinaryTreeNode(3);
const child4 = new BinaryTreeNode(4);
const child5 = new BinaryTreeNode(5);

root.addLeft(child1);
root.addRight(child2);
child1.addLeft(child3);
child1.addRight(child4);
child2.addLeft(child5);

// console.log(JSON.stringify(root, null, 2));

module.exports = root;
