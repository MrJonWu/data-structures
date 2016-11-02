var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.siz = 0;
};

Stack.prototype.push = function(val) {
  this.siz++;
  this.storage[this.siz] = val;
};
Stack.prototype.pop = function() {
  var val = this.storage[this.siz];
  delete this.storage[this.siz];
  if (this.siz > 0) {
    this.siz--;
  }
  return val;
};
Stack.prototype.size = function() {
  return this.siz;
};
