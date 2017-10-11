var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Head stores the key of the first element in the queue
  var head = 0;
  // Tail stores the next key to be used for a enqueue
  var tail = 0;

  // Beginning     tail = 0, head = 0, size = tail - head = 0
  //enqueue(a)     tail = 1, head = 0, size = tail - head = 1
  //enqueue(b)     tail = 2, head = 0, size = tail - head = 2
  //dequeue()      tail = 2, head = 1, size = tail - head = 1
  //enqueue(c)     tail = 3, head = 1, size = tail - head = 2
  //dequeue()      tail = 3, head = 2, size = tail - head = 1
  //dequeue()      tail = 3, head = 3, size = tail - head = 0
  //dequeue()      once head === tail, will not return


  // Implement the methods below
  someInstance.enqueue = function(value) {
    // Binds value to storage[tail] and then increments tail by 1
    storage[tail++] = value;
  };

  someInstance.dequeue = function() {
    // When tail is less than or equal to head, there is nothing to dequeue
    // Must evaluate when tail is greater than head
    if(tail > head) {
      // Returns storage[head] and then increments head by 1
      return storage[head++];
    }
  };

  someInstance.size = function() {
    // The difference between tail and head is the length of the queue
    return tail-head;
  };

  return someInstance;
};
