var DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.addToTail = function(value) {
  var newNode = new dNode(value);
  if (this.head === null) {
    // this.list = { new dNode(value) };
    this.head = newNode;
    this.tail = newNode;    
  }
  newNode.previous = this.tail;
  this.tail.next = newNode;
  this.tail = newNode;
};

DoublyLinkedList.prototype.removeTail = function() {
  if (this.tail !== null) {
    var res = this.tail.value;
    this.tail = this.tail.previous;
    this.tail.next = null;
    return res;
  }
};

DoublyLinkedList.prototype.addToHead = function(value) {
  var newNode = new dNode(value);
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  }
  newNode.next = this.head;
  this.head.previous = newNode;
  this.head = newNode;
};

DoublyLinkedList.prototype.removeHead = function() {
  if (this.head !== null) {
    var res = this.head.value;
    this.head = this.head.next;
    this.head.previous = null;
    return res;
  }
};

DoublyLinkedList.prototype.contains = function(value) {
  var workingNode = this.head;
  while (workingNode !== null) {
    if (workingNode.value === value) {
      return true;
    }
    workingNode = workingNode.next;
  }
  return false;
};

var dNode = function(value) {
  this.value = value;
  this.previous = null;
  this.next = null;
};