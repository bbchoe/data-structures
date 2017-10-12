var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
// add node with 'value'. old tail should point to this node.
// if list head and tail are both null, then create new node, 

    // Creating the new node to be added
    var addingNode = Node(value);
    // if the linked list is empty, set head and tail to reference addingNode
    if (list.head === null) {
      list.head = addingNode;
      list.tail = addingNode;
    }
    // Setting the .next reference on the old tail to the new node (addingNode)
    list.tail.next = addingNode;
    // NOW, setting list.tail to the addingNode which is now the last node
    list.tail = addingNode;
  };

  list.removeHead = function() {
    // Bind the value of list.head to res, BEFORE resetting list.head
    var res = list.head.value;
    // Set list.head to reference the old list.head.next
    list.head = list.head.next;
    return res;
  };

  list.contains = function(target) {
    // Setting working Node to reference the beginning of the linked list
    var workingNode = list.head;
    // while workingNode (the node that we are evaluating) is not null
    while (workingNode !== null) {
      // Check the current node value === target
      if (workingNode.value === target) {
        return true;
      }
      // Change workingNode to reference the next node in sequence
      workingNode = workingNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
