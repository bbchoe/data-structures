var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.head = 0;
  this.tail = 0;

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.tail++] = value;
};

Queue.prototype.dequeue = function() {
  if(this.tail > this.head) {
    var res = this.storage[this.head];
    delete this.storage[this.head++];
    return res;
  }
};

Queue.prototype.size = function() {
  return this.tail - this.head;
};


