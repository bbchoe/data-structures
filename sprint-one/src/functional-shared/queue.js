var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // return value
  var newQueue = {};

  // Adding private variables to newQueue
  newQueue.storage = {};
  newQueue.tail = 0;
  newQueue.head = 0;

  // Add shared methods
  _.extend(newQueue, queueMethods);

  // returning object
  return newQueue;
};

// var extend = function(original, additions) {
// 	for( var key in additions ) {
// 		original[key] = additions[key];
// 	}
// };

// Object that stores all methods
var queueMethods = {};


queueMethods.enqueue = function(value) {
	// Binds value to this.storage[this.tail] and then increments this.tail
	// by 1
	this.storage[this.tail++] = value;
};

queueMethods.dequeue = function() {
	//When this.tail is less than or equal to this.head, there is nothing to dequeue
	// Therefore, must evaluate when this.tail > this.head
	if(this.tail > this.head) {
	 // Returns this.storage[this.head] and then increments this.head by 1
	 return this.storage[this.head++];
	}
};

queueMethods.size = function() {
	return this.tail - this.head;
};


