class Node {
  height = (node = this) => {
    if (node === null) {
      return 0;
    } else {
      let leftHeight = this.height(node.leftChild);
      let rightHeight = this.height(node.rightChild);

      if (leftHeight > rightHeight) {
        return leftHeight + 1;
      } else {
        return rightHeight + 1;
      }
    }
  };
  constructor(value, leftChild = null, rightChild = null) {
    this.value = value;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

class Tree {
  _normalizeArray = (arr) => {
    arr = [...new Set(arr)];
    arr.sort((a, b) => a - b);
    return arr;
  };

  buildTree = (arr) => {
    if (arr.length === 1) {
      return new Node(arr[0]);
    } else if (arr.length === 0) {
      return null;
    }

    const midpoint = parseInt(Math.floor(arr.length / 2));
    let root = new Node(arr[midpoint]);

    root.leftChild = this.buildTree(arr.slice(0, midpoint));
    root.rightChild = this.buildTree(arr.slice(midpoint + 1));

    return root;
  };

  printByLevel = (root = this.headNode, level) => {
    if (root === null) {
      return;
    }
    if (level === 1) {
      console.log(`${root.value} `);
    } else if (level > 1) {
      this.printByLevel(root.leftChild, level - 1);
      this.printByLevel(root.rightChild, level - 1);
    }
  };

  printTree = (root = this.headNode) => {
    for (let i = 1; i <= root.height(); i++) {
      this.printByLevel(root, i);
      console.log("------------");
    }
  };

  search = (root = this.headNode, value) => {
    if (root === null || value === root.value) {
      return root;
    }

    if (root.value > value) {
      this.search(root.leftChild, value);
    } else {
      this.search(root.rightChild, value);
    }
  };

  inorderTraverse = (root) => {
    if (root !== null) {
      this.inorderTraverse(root.leftChild);
      console.log(root.value);
      this.inorderTraverse(root.rightChild);
    }
  };

  _getInOrderNext = (node) => {
    let current = node;
    if (node.leftChild !== null) {
      current = current.leftChild;
    } else {
      return current;
    }
  };

  insert = (root, value) => {
    if (root === null) {
      return new Node(value);
    } else {
      if (root.value === value) {
        return root;
      } else if (root.value <= value) {
        root.rightChild = this.insert(root.rightChild, value);
      } else {
        root.leftChild = this.insert(root.leftChild, value);
      }
    }
    return root;
  };

  _deleteDeepest(root, delNode) {
    let q = [];
    q.push(root);

    let temp = null;

    while (q.length > 0) {
      temp = q[0];
      q.shift();

      if (temp == delNode) {
        temp = null;
        return;
      }
      if (temp.right != null) {
        if (temp.right == delNode) {
          temp.right = null;
          return;
        } else q.push(temp.right);
      }

      if (temp.left != null) {
        if (temp.left == delNode) {
          temp.left = null;
          return;
        } else q.push(temp.left);
      }
    }
  }

  delete(root, key) {
    if (root == null) return;

    if (root.left == null && root.right == null) {
      if (root.key == key) {
        root = null;
        return;
      } else return;
    }

    let q = [];
    q.push(root);
    let temp = null,
      keyNode = null;

    while (q.length > 0) {
      temp = q[0];
      q.shift();

      if (temp.key == key) keyNode = temp;

      if (temp.left != null) q.push(temp.left);

      if (temp.right != null) q.push(temp.right);
    }

    if (keyNode != null) {
      let x = temp.key;
      this._deleteDeepest(root, temp);
      keyNode.key = x;
    }
  }

  constructor(array) {
    this.headNode = this.buildTree(this._normalizeArray(array));
  }
}

exampleArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let a = new Tree(exampleArray);
a.inorderTraverse(a.headNode);
a.delete(a.headNode, 23);
a.inorderTraverse(a.headNode);
