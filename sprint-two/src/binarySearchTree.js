var BinarySearchTree = function(value) {
  var node = Object.create(bstProto);
  node.value = value;
  node.left = null;
  node.right = null;

  return node;
};

var bstProto = {};

bstProto.insert = function(val) {
  if (val < this.value) {
    if (this.left) {
      this.left.insert(val);
    } else {
      this.left = BinarySearchTree(val);
    }
  } else if (val > this.value) {
    if (this.right) {
      this.right.insert(val);
    } else {
      this.right = BinarySearchTree(val);
    }
  } else {
    alert('node already exists');
  }
};

bstProto.contains = function(val) {
  if (val === this.value) {
    return true;
  }
  if (val < this.value && this.left !== null) {
    return this.left.contains(val);
  } else if (val > this.value && this.right !== null) {
    return this.right.contains(val);
  } else {
    return false;
  }
};

bstProto.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert = logarithmic
 contains = logarithmic 
 deepFirstlog = linear
 */
