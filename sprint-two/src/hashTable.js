

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};
//check if limit is reached
//take a snapshot of the storage as is
//clear out existing storage
//iterate through each of snapshot
  //insert with new limit and index

HashTable.prototype.insert = function(k, v) {
  // console.log(this._count)
  this._count++;
  if (this._count >= this._limit * .75) {
    this._limit = this._limit * 2;
    this._count = 0;
    var tempStorage;
    this._storage.each(function(storageVal, ind, storage) {
      tempStorage = storage;
    });
    this._storage = LimitedArray(this._limit);
    // iterate over temp storage
    for (var i = 0; i < tempStorage.length; i++) {
      //check if each bucket is undefined, if it isn't iterate over the bucket 
      if (tempStorage[i] !== undefined) {
        for (var j = 0; j < tempStorage[i].length; j++) {
        // insert each key value array into storage
          this.insert(tempStorage[i][j][0], tempStorage[i][j][1]);
        } 
      }
    }
    this._count++;
  }
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
  if (this._count > 0) {
    this._count--;
  }
  if (this._count <= this._limit * .25) {
    this._limit = this._limit * .5;
    this._count = 0;
    var tempStorage;
    this._storage.each(function(storageVal, ind, storage) {
      tempStorage = storage;
    });
    this._storage = LimitedArray(this._limit);
    // iterate over temp storage
    for (var i = 0; i < tempStorage.length; i++) {
      //check if each bucket is undefined, if it isn't iterate over the bucket 
      if (tempStorage[i] !== undefined) {
        for (var j = 0; j < tempStorage[i].length; j++) {
        // insert each key value array into storage
          this.insert(tempStorage[i][j][0], tempStorage[i][j][1]);
        } 
      }
    }
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  //this._storage.set(index, undefined);
  this._storage.each(function(storageInd, y, storage) {
    for (var i = 0; i < storage[index].length; i++) {
      if (storage[index][i][0] === k) {
        storage[index].splice(i, 1);
      }
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert = Amortized Constant
 retrieve = Constant in relation to the complete hash table data set
 remove = linear
 */


