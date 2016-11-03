

// Instantiate a new graph
var Graph = function() {

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = new Graph();
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this) {
    if (key === node.toString()) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this[node];
  if (this.edge) {
    // for (var key in this) {
    //   if (typeof +key === 'number') {
    //     this.removeEdge(node, +key);
    //   }
    // }
    /* we believe that the following involves less time complexity than the above*/
    for (var i = 0; i < this.edge.length; i++) {
      if (this.edge[i].indexOf(node) !== - 1) {
        this.edge.splice(i, 1);
      }
    }
  }
  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var temp = [fromNode, toNode].sort();
  if (this.edge) {
    for (var i = 0; i < this.edge.length; i++) {
      if (this.edge[i].sort().toString() === temp.toString()) {
        return true;
      }
      // if ((this.edge[i][0] === fromNode && this.edge[i][1] === toNode) || (this.edge[i][1] === fromNode && this.edge[i][0] === toNode)) {
      //   return true;
      // }
    }
    return false;
  }


};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.edge) {
    this.edge = [];
  }
  this.edge.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var temp = [fromNode, toNode].sort();
  if (this.edge) {
    for (var i = 0; i < this.edge.length; i++) {
      if (this.edge[i].sort().toString() === temp.toString()) {
        this.edge.splice(i, 1);
      }
  // if (this.edge) {
  //   for (var i = 0; i < this.edge.length; i++) {
  //     if (this.edge[i][0] === fromNode && this.edge[i][1] === toNode) {
  //       this.edge.splice(i, 1);
  //     }
  //   }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    if (typeof +key === 'number') {
      cb(+key);
    }
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


