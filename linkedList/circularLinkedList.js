// 定义链表节点类
class Node {
  constructor(value) {
    this.value = value; // 节点的值
    this.next = null; // 指向下一个节点的引用
  }
}

// 定义循环链表类
class CircularLinkedList {
  constructor() {
    this.head = null; // 链表头节点
    this.tail = null; // 链表尾节点
  }

  // 在链表末尾添加节点
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head; // 形成循环
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head; // 更新尾节点的next引用，形成循环
    }
  }

  // 在链表头部添加节点
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head; // 形成循环
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head; // 更新尾节点的next引用，形成循环
    }
  }

  // 打印链表
  printList() {
    if (!this.head) return;

    let current = this.head;
    const result = [];
    do {
      result.push(current.value);
      current = current.next;
    } while (current !== this.head);

    console.log(result.join(' -> '));
  }

  // 删除链表中指定值的节点
  delete(value) {
    if (!this.head) return;

    if (this.head.value === value) {
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.tail.next = this.head;
      }
      return;
    }

    let current = this.head;
    do {
      if (current.next.value === value) {
        current.next = current.next.next;
        if (current.next === this.head) {
          this.tail = current;
        }
        break;
      }
      current = current.next;
    } while (current !== this.head);
  }
}

// 使用循环链表
const list = new CircularLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.printList(); // 输出: 0 -> 1 -> 2 -> 3
list.delete(2);
list.printList(); // 输出: 0 -> 1 -> 3
list.delete(0);
list.printList(); // 输出: 1 -> 3
