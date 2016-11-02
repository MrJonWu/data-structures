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