var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);

  newQueue.storage = {};
  newQueue.head = 0;
  newQueue.tail = 0;

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.tail++] = value;
};

queueMethods.dequeue = function() {
  if(this.tail > this.head) {
    var res = this.storage[this.head];
    delete this.storage[this.head++];
    return res;
  }
};

queueMethods.size = function() {
  return this.tail - this.head;
};


