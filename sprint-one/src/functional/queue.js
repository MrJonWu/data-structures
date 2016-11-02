var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    storage[size] = value;
  };

  someInstance.dequeue = function() {
    var val = storage[1];
    if (size > 1) {
      for (var i = 1; i <= size; i++) {
        storage[i] = storage[i + 1];
      }
    }
    delete storage[size];
    if (size > 0) {
      size--; 
    }
    return val;
  };

  someInstance.size = function() {
    return size;
  };
  return someInstance;
};
/*
var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var oPos = 0;
  var qPos = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    oPos++;
    storage[oPos] = value;
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      size--; 
      qPos++;
    }
    return storage[qPos];
  };

  someInstance.size = function() {
    return size;
  };
  return someInstance;
};
*/