
var Tree = function(value) {
  
  var newTree = {};
  
  newTree.value = value;
  newTree.children = [];
  
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var addingTree = Tree(value);
  this.children.push(addingTree);
};

treeMethods.contains = function(target) {
  if(this.value === target) {
    return true;
  }
  
  if(this.children.length > 0) {
    return _.reduce(this.children, function(acc, child) {
      // If target has already been found, do not iterate anymore
      return acc || child.contains(target); 
    }, false);
  }
  
  return false;
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
