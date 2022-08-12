class LinkedList {
  traverseLog = () => {
    let current = this.headNode;

    while (true) {
      console.log(current.value);
      if (current.nextNode === null) {
        break;
      } else {
        current = current.nextNode;
      }
    }
  };

  print = () => {
    let current = this.headNode;
    let message = "";
    while (true) {
      message = message + `${current.value} => `;
      if (current.nextNode === null) {
        break;
      } else {
        current = current.nextNode;
      }
    }

    message = message + "null";
    console.log(message);
  };

  getTail = () => {
    let current = this.headNode;
    while (true) {
      if (current.nextNode === null) {
        return current;
      } else {
        current = current.nextNode;
      }
    }
  };

  _getBeforeTail = () => {
    let current = this.headNode;
    while (true) {
      if (current.nextNode.nextNode === null) {
        return current;
      } else {
        current = current.nextNode;
      }
    }
  };

  getHead = () => {
    return this.headNode;
  };

  getSize = () => {
    let current = this.headNode;
    let count = 1;
    while (true) {
      if (current.nextNode === null) {
        return count;
      } else {
        current = current.nextNode;
        count += 1;
      }
    }
  };

  appendNode = (newNode) => {
    const lastNode = this.getTail();
    lastNode.nextNode = newNode;
  };

  prependNode = (newNode) => {
    newNode.nextNode = this.headNode;
    this.headNode = newNode;
  };

  getNodeAt = (index) => {
    if (index >= this.getSize()) {
      throw new Error("Attempt to access non-existent data.");
    } else {
      let current = this.headNode;
      for (let i = 0; i < index; i++) {
        current = current.nextNode;
      }
      return current;
    }
  };

  pop = () => {
    let newLast = this._getBeforeTail();
    newLast.nextNode = null;
  };

  contains = (val) => {
    let current = this.headNode;
    for (let i = 0; i < this.getSize(); i++) {
      if (current.value === val) {
        return true;
      } else {
        current = current.nextNode;
      }
    }
    return false;
  };

  find = (val) => {
    let current = this.headNode;
    for (let i = 0; i < this.getSize(); i++) {
      if (current.value === val) {
        return i;
      } else {
        current = current.nextNode;
      }
    }
    return null;
  };

  constructor(headNode) {
    this.headNode = headNode;
  }
}

class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

let node1 = new Node(1, null);
let node2 = new Node("hi", node1);
let node3 = new Node(0, node2);

let list = new LinkedList(node3);

list.print();
