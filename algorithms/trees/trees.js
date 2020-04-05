const LEFT = 0;
const RIGHT = 1;

// implement tree node to be used in any
// tree kind of category like BTS, full, completed...
class TreeNode {
  constructor(value) {
    this.value = value;
    this.descendents = [];
    this.parent = null;
  }

  get left() {
    return this.descendents[LEFT];
  }

  set left(node) {
    this.descendents[LEFT] = node;
    if (node) {
      node.parent = this;
    }
  }

  get right() {
    return this.descendents[RIGHT];
  }

  set right(node) {
    this.descendents[RIGHT] = node;
    if (node) {
      node.parent = this;
    }
  }
}

class BinarySearchTrees {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  add(value) {
    const newNode = new TreeNode(value);
    if (this.root) {
      // search parent to compare if its
      // lower or higher
      const { found, parent } = this.findNodeAndParent(value);
      // if the value that we want to insert is
      // already IN in the graph increase repeat

      // we could also search only parent
      if (found) {
        // if multiplicity is null set up to 1
        // if its has already a value increment
        // found.meta.multiplicity = (found.meta.multiplicity || 1) + 1;
      } else if (value < parent.value) {
        parent.left = newNode;
      } else {
        parent.right = newNode;
      }
      // if is graph has not root node then add this
      // newNode created
    } else {
      this.root = newNode;
    }
    // update size of graph
    this.size += 1;
    return newNode;
  }

  findNodeAndParent(value) {
    let node = this.root;
    let parent;

    while (node) {
      if (node.value === value) {
        break;
      }
      parent = node;
      node = (value >= node.value) ? node.right : node.left;
    }

    return {
      found: node,
      parent,
    };
  }
}

const bst = new BinarySearchTrees();
bst.add(6);
bst.add(4);
bst.add(2);
bst.add(4);
