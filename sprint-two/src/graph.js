

// Instantiate a new graph
// Complexity O(1)
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
// Complexity O(1)
Graph.prototype.addNode = function(node) {
  if (this.storage[node] === undefined) {
    this.storage[node] = []; 
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
// Complexity O(n)
Graph.prototype.contains = function(node) {
  return _.contains(Object.keys(this.storage), JSON.stringify(node));
};

// Removes a node from the graph.
// Complexity O(n)
Graph.prototype.removeNode = function(node) {
  var graph = this;
  _.each(this.storage[node], function(edge) {
    graph.removeEdge(edge, node);
  });
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// Complexity O(n)
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return _.contains(this.storage[fromNode], toNode);
};

// Connects two nodes in a graph by adding an edge between them.
// Cimplexity O(1)
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.hasEdge(fromNode, toNode)) {
    this.storage[fromNode].push(toNode);
    this.storage[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
// Complexity O(n)
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode)) {
    this.storage[fromNode].splice(this.storage[fromNode].indexOf(toNode), 1);
    this.storage[toNode].splice(this.storage[toNode].indexOf(fromNode), 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
// Complexity O(n)
Graph.prototype.forEachNode = function(cb) {
  _.each(Object.keys(this.storage), function(node) {
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


