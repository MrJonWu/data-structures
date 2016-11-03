var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));

};

treeMethods.contains = function(target) {
  var result = false;
  var searcher = function(node) {

    if (node.value === target) {
      result = true;
    } 
    if (node.children.length) {
      for (var i = 0; i < node.children.length; i++) {
        searcher(node.children[i]);
      }
    }
  };  
  searcher(this);
  return result;
  // var searcher = function(node) {

  //   if (node.value === target) {
  //     return true;
  //   } else if (node.children.length) {
  //     var test = false;
  //     for (var i = 0; i < node.children.length; i++) {
  //       if (searcher(node.children[i])) {
  //         test = true;
  //       }
  //     }
  //     return test;
  //   }
  //   return false;
  // };  
  // return searcher(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
