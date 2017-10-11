var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // return object
  var newStack = {};

  // Adding private variables to newStack
  newStack.storage = {};
  newStack.count = 0;

  // add methods from stackMethods to newStack object
  extend(newStack, stackMethods);

  // returning object
  return newStack;
};

// Shared methods means that all methods are stored in
// a methods object outside of the constructor

// my extend function
var extend = function(originalObject, additions) {
	for (var key in additions ) {
		originalObject[key] = additions[key];
	}
};

// Object that is holding all the methods
var stackMethods = {};

stackMethods.push = function(value) {
	// binds value to this.storage[this.count] and then increments this.count
	// by 1
	this.storage[this.count++] = value;
}

stackMethods.pop = function() {
	if(this.count !== 0) {
		// decrements this.count by one and then returns this.storage[this.count]
		return this.storage[--this.count];
	}
}

stackMethods.size = function() {
	return this.count;
}