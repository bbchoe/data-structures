

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var currentValueAtKey = this._storage.get(index);
  
  // if bucket is not empty
  if ( currentValueAtKey !== undefined ) {
    
    var foundAtIndex = -1;
    
    _.each(currentValueAtKey, function(pair, idx) {
      if (pair[0] === k) {
        foundAtIndex = idx;
      }
    });
    
    if( foundAtIndex !== -1) {
      currentValueAtKey[foundAtIndex][1] = v;
    } else {
      currentValueAtKey.push([k, v]);
    }
    
  // if bucket is empty
  } else {
    // add wrapper and add new k, v pair
    var wrapper = [];
    wrapper.push([k, v]);
    this._storage.set(index, wrapper);
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
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(val, idx, limitedArrayStorage) {
    if (idx === index) {
      limitedArrayStorage[idx] = undefined;
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

  // if ( !Array.isArray(retrievedItem) ) {
  //   return retrievedItem;
  // } else {
    
  //   _.each(retrievedItem, function(pair) {
  //     if ( pair[0] === k) {
  //       return pair[1];
  //     }
  //   });
    
  //   return retrievedItem[0][1];
  // }
