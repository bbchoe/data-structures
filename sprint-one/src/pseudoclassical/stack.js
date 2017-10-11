var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.storage = {};

};

Stack.prototype.push = function(value) {
  this.storage[this.length++] = value;
};

Stack.prototype.pop = function() {
  if (this.length !== 0) {
    var res = this.storage[--this.length];
    delete this.storage[this.length];
    return res;
  }
};

Stack.prototype.size = function() {
  return this.length;
};


