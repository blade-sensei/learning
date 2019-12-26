// first add piece of node class

class Node {
    constructor(value) {
        this.value = value;
        this.adjacents = []
    }

    addAdjacent(node) {
        this.adjacents.push(node);
    }

    removeAdjacent(node) {
        const index = this.adjacents.indexOf(node);
        if (index > -1) {
            this.adjacents.splice(index, 1);
            return node;
        }
    }

    getAdjacents() {
        return this.adjacents;
    }

    isAdjacent(node) {
        return this.adjacents.indexOf(node) > -1;
    }
}

class Graph {
    constructor(edgeDirection = Graph.DIRECTED) {
        this.nodes = new Map();
        this.edgeDirection = edgeDirection;
    }

    // our graph can get many VERTEX, each vertex has no necessary an edge with
    // other vertex - so EDGE can be added from existed or not vertex 

    addEdge(source, destination) {
        const sourceNode = this.addVertex(source);
        const destinationNode = this.addVertex(destination);
        sourceNode.addAdjacent(destinationNode);

        if (this.edgeDirection === Graph.UNDIRECTED) {
            destinationNode.addAdjacent(sourceNode);
        }

        return [sourceNode, destinationNode];
    }

    addVertes(value) {
        if (this.nodes.has(value)) {
            // if value exist return
            return this.nodes.get(value);
        } else {
            // otherwise created and save it
            const vertex = new Node(value);
            // set key and value
            this.nodes.set(value, vertex);
            return this.vertex;
        }
    }

    removeVertex(value) {
        const vertexToRemove = this.nodes.get(value)
        // if its founded
        if (vertexToRemove) {
            // first remove this vertex in all USED vertex (values)
            for (const node of this.nodes.values()) {
                node.removeAdjacent(vertexToRemove);
            }
        }
        // any case removed from graph
        return this.nodes.delete(value);
    }
}

Graph.UNDIRECTED = Symbol('undirected grapth');
Graph.DIRECTED = Symbol('directed grapth');