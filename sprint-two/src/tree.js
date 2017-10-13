// Complexity O(1)
var Tree = function(value) {
  
  var newTree = {};
  
  newTree.value = value;
  newTree.children = [];
  
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

// Complexity O(1)
treeMethods.addChild = function(value) {
  // Create new tree to add to child array of parent tree
  var addingTree = Tree(value);
  // Add the newly created tree to the parent child array
  this.children.push(addingTree);
};

// Complexity O(n)
treeMethods.contains = function(target) {
  // Target value reached, Base Case
  if(this.value === target) {
    return true;
  }
  
  // Check children array, Recursive Case
  if(this.children.length > 0) {
    return _.reduce(this.children, function(acc, child) {
      // **If target has already been found, do not iterate anymore
      return acc || child.contains(target); 
    }, false);
  }
  
  // If not found
  return false;
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
