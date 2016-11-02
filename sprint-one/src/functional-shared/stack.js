var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.siz = 0;
  extend(instance, stackMethods);
  return instance;
  
};
var extend = function(arg, arg2) {
  for (var key in arg2) {
    arg[key] = arg2[key];
  }
};

var stackMethods = {};
stackMethods.push = function(val) {
  this.siz++;
  this.storage[this.siz] = val;
};
stackMethods.pop = function() {
  var val = this.storage[this.siz];
  delete this.storage[this.siz];
  if (this.siz > 0) {
    this.siz--;
  }
  return val;

};
stackMethods.size = function() {
  return this.siz;
};


