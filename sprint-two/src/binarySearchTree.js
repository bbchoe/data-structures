var BinarySearchTree = function(value) {
  var obj = Object.create(BinarySearchTree.prototype);
  
  obj.value = value;
  obj.left = null;
  obj.right = null;
  obj.balanceFactor = 0;
  //obj.BFRight = 0
  //obj.BFLeft = 0
  
  return obj;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
      debugger;
      this.balanceFactor++;
      if (this.balanceFactor >= 2) {
        if (this.right.balanceFactor < 0) {
          this.clockwise();
          //this.balanceFactor--;
        } else {
          //counterclockwise rotation
          
        }
      }
      
    }
  } else if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
      this.balanceFactor--;
      if (this.balanceFactor <= -2) {
        // set the left child to be the new root
      }
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

BinarySearchTree.prototype.clockwiseHeavyRight = function() {
  var oldRoot = this;
  var newRoot = oldRoot.right.left;
  oldRoot.right.balanceFactor++;
  oldRoot.balanceFactor--;
  oldRoot.right.left = null;
  newRoot.right = oldRoot.right;
  newRoot.left = oldRoot;
  oldRoot = newRoot;
};

BinarySearchTree.prototype.counterclockwiseHeavyRight = function() {
  var oldRoot = this;
  var newRoot = oldRoot.right;
  oldRoot.balanceFactor--;
  newRoot.balanceFactor--;
  oldRoot.right = null;
  newRoot.left = oldRoot;
  oldRoot = newRoot;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
