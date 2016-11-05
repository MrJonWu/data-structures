var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this._storage) {
    this._storage = [];
  }
  if (!_.contains(this._storage, item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  if (this._storage) {
    return _.contains(this._storage, item);
  }
};

setPrototype.remove = function(item) {
  if (this._storage) {
    for (var i = 0; i < this._storage.length; i++) {
      if (this._storage[i] === item) {
        this._storage.splice(i, 1);
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 add = constant
 contains = linear
 remove = quadratic
 */
