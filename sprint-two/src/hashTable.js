

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._tupleCount = 0;
};

HashTable.prototype.insert = function(k, v) {
  
  // Re Hash if _tupleCount/_limit > .75
  //debugger;
  if ( this._tupleCount / this._limit >= .75 ) {
    this.reHash(this._limit * 2);
  }
  
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var currentValueAtKey = this._storage.get(index);
  
  // if bucket is not empty
  if ( currentValueAtKey !== undefined ) {
    
    var foundAtIndex = -1;
    // Determine if key already exists
    _.each(currentValueAtKey, function(pair, idx) {
      if (pair[0] === k) {
        foundAtIndex = idx;
      }
    });
    
    if ( foundAtIndex === -1) {
      currentValueAtKey.push([k, v]);
      this._tupleCount++;
    } else {
      // Overwriting existing key value
      currentValueAtKey[foundAtIndex][1] = v;
    }
    
  // if bucket is empty
  } else {
    // add wrapper and add new k, v pair
    var wrapper = [];
    wrapper.push([k, v]);
    this._storage.set(index, wrapper);
    this._tupleCount++;  
  }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var retrievedItem = this._storage.get(index);
  
  // if not an array
  if ( !Array.isArray(retrievedItem) ) {
    return retrievedItem;
  } else {
    var res;
    _.each(retrievedItem, function(pair) {
      if (pair[0] === k) {
        res = pair[1];
      }
    });
    return res;
  }
  
};

HashTable.prototype.remove = function(k) {
  
  // Re Hash if _tupleCount/_limit < .25
  if ( this._tupleCount / this._limit <= .25 ) {
    this.reHash(this._limit / 2);
  }
  
  var index = getIndexBelowMaxForKey(k, this._limit);
  var self = this;
  this._storage.each(function(val, idx, limitedArrayStorage) {
    if (idx === index) {
      limitedArrayStorage[idx] = undefined;
      self._tupleCount -= 1;
    }
  });
};



HashTable.prototype.reHash = function(newLimit) {
  // Gather all tuples currently in the hash table  
  var oldStorage = this._storage;
  this._storage = LimitedArray(newLimit);
  
  var self = this;
  this._limit = newLimit;
  this._tupleCount = 0;
  //debugger;
  oldStorage.each(function(wrapper) {
    if ( wrapper !== undefined ) {
      _.each(wrapper, function(tuple) {
        self.insert(tuple[0], tuple[1]);
      });
    }
  });

 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


