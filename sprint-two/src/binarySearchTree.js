var BinarySearchTree = function(value) {
  var obj = Object.create(BinarySearchTree.prototype);
  
  obj.value = value;
  obj.left = null;
  obj.right = null;
  
  return obj;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (value > this.value && this.right !== null) {
    return this.right.contains(value);
  } else if (value < this.value && this.left !== null) {
    return this.left.contains(value);
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
