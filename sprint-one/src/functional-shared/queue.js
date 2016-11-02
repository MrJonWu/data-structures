var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.siz = 0;
  extend(instance, queueMethods);
  return instance;
};
var extend = function(arg, arg2) {
  for (var key in arg2) {
    arg[key] = arg2[key];
  }
};

var queueMethods = {
  enqueue: function(val) {
    this.siz++;
    this.storage[this.siz] = val;
  },
  dequeue: function() {
    var val = this.storage[1];
    if (this.siz > 1) {
      for (var i = 1; i <= this.siz; i++) {
        this.storage[i] = this.storage[i + 1];
      }
    }
    delete this.storage[this.siz];
    if (this.siz > 0) {
      this.siz--;
    }
    return val;
  },
  size: function() {
    return this.siz;
  }
};


