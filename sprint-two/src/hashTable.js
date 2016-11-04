

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) { //if there is a value at index
    var temp = this._storage.get(index);
    var hasK = false;
    for (var i = 0; i < temp.length; i++) {
      if (temp[i][0] === k) {
        temp[i][1] = v;
        hasK = true;
      }
    }
    if (!hasK) {
      temp.push([k, v]);
    }
    this._storage.set(index, temp);
  } else {
    this._storage.set(index, [[k, v]]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(index);
  for (var i = 0; i < temp.length; i++) {
    if (temp[i][0] === k) {
      return temp[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(storageInd, y, storage) {
    for (var i = 0; i < storage[index].length; i++) {
      console.log(storage[index][i]);
      if (storage[index][i][0] === k) {
        storage[index].splice(i, 1);
      }
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


