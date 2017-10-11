var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Using size as a counter for properties in storage
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    // binds value to storage[size] and then increments size by 1
    storage[size++] = value;
  };

  someInstance.pop = function() {
    // if size is not already 0
    if(size !== 0) {
      // decrements size by 1 and then returns storage[size]
      return storage[--size];
    }
  };

  someInstance.size = function() {
    // returns the value at size
    return size;
  };

  return someInstance;
};
