class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  depthFirstForEach(cb) {
    cb(this.value);
    if (this.left) {
      this.left.depthFirstForEach(cb);
    }
    if (this.right) {
      this.right.depthFirstForEach(cb);
    }
  }

  breadthFirstForEach(cb) {
    const queue = [];
    queue.push(this);
    while (queue.length) {
      const currNode = queue.shift();
      if (currNode.left) {
        queue.push(currNode.left);
      }
      if (currNode.right) {
        queue.push(currNode.right);
      }
      cb(currNode.value);
    }
  }

  insert(value) {
    const newNode = new BinarySearchTree(value);
    if (value < this.value) {
      if (!this.left) {
        this.left = newNode;
      } else {
        this.left.insert(value);
      }
    } else if (value >= this.value) {
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(target) {
    if (this.value === target) {
      return true;
    }
    if (this.left) {
      if (this.left.contains(target)) {
        return true;
      }
    }
    if (this.right) {
      if (this.right.contains(target)) {
        return true;
      }
    }
    return false;
  }

  getMax() {
    if (!this) return null;

    let max = this.value;
    let current = this;

    while (current) {
      if (current.value > max) {
        max = current.value;
      }
      current = current.right;
    }

    return max;
  }

  getMin(arr) {
    let array = arr;
    if (!array) {
      array = [];
    }
    if (!this) return null;

    let current = this;

    while (current) {
      if (current.left && !array.includes(current.left.value)) {
        current = current.left;
        array.push(current.value);
      } else if (current.right && !array.includes(current.right.value)) {
        current = current.right;
        array.push(current.value);
      } else return null;
    }
    return array;
  }
}

module.exports = BinarySearchTree;
