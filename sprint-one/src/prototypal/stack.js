var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  return instance;
};

var stackMethods = {
  storage: {},
  siz: 0,
  push: function(val) {
    this.siz++;
    this.storage[this.siz] = val;
  },
  pop: function() {
    var val = this.storage[this.siz];
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


