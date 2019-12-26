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

    addVertex(value) {
        if (this.nodes.has(value)) {
            // if value exist return
            return this.nodes.get(value);
        } else {
            // otherwise created and save it
            const vertex = new Node(value);
            // set key and value
            this.nodes.set(value, vertex);
            return vertex;
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

    *bfs(first) {
        const visited = new Map();
        const visitList = new Queue();
        visitList.enqueue(first);

        while(!visitList.isEmpty()) {
            const node = visitList.dequeue();
            if (node && !visited.has(node)) {
                yield node;
                visited.set(node);
                node.getAdjacents().forEach(adj => visitList.enqueue(adj));
            }
        }
    }
}

class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

Graph.UNDIRECTED = Symbol('undirected grapth');
Graph.DIRECTED = Symbol('directed grapth');

const graph = new Graph(Graph.UNDIRECTED);

const [first] = graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(5, 2);
graph.addEdge(6, 3);
graph.addEdge(7, 3);
graph.addEdge(8, 4);
graph.addEdge(9, 5);
graph.addEdge(10, 6);

bfsFromFirst = graph.bfs(first);

bfsFromFirst.next().value.value; // 1
bfsFromFirst.next().value.value; // 2
bfsFromFirst.next().value.value; // 3
bfsFromFirst.next().value.value; // 4
// ...
