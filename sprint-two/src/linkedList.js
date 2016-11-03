var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var nod = Node(value);
    if (!list.head) {
      list.head = nod;
    }
    if (list.tail) {
      list.tail.next = nod;
    }

    list.tail = nod;
  };

  list.removeHead = function() {
    var val = list.head.value;
    list.head = list.head.next;
    return val;
  };

  list.contains = function(target) {
  //   for (key in list) {
  //     if (key.value) {
  //       return true;
  //     }
  //   }
  //   return false;
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
