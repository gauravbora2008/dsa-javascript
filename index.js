class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

const linkedListNode1 = new Node("1");
const linkedListNode2 = new Node("2");
const linkedListNode3 = new Node("3");
const linkedListNode4 = new Node("4");
const linkedListNode5 = new Node("5");
const linkedListNode6 = new Node("6");

// console.log(linkedListNode1);

linkedListNode1.next = linkedListNode2;
linkedListNode2.next = linkedListNode3;
linkedListNode3.next = linkedListNode4;
linkedListNode4.next = linkedListNode5;
linkedListNode5.next = linkedListNode6;

/*  Linked list functions:
    ======================
    insertNode(data, position)
    appendNode(data)
    prependNode(data)
    deleteNode(data, position)
    searchNode(data)
    mergeLists(mode, list1, list2) // alternating merge, append, prepend
    listMap(fn, list) // maps a function onto every node of list
    deleteList(list) // destroys list
*/

function linkedListIterator(startingNode) {
    let currentNode = startingNode;
    while(currentNode != null) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
}

linkedListIterator(linkedListNode1);

/*  Stack // using linkedList, using queue
    push(data)
    pop()
    reverseData()
    peek()
    isEmpty()
    search()
*/

/*  Queue 
    enqueue(data)
    dequeue()
    reverseData()
    search()
    isEmpty()
    peek()
*/

/*  Trees and Heaps
    postOrderTraverse // using stack, queue and other approaches
    inOrderTraverse // using stack, queue and other approaches
    preOrderTraverse // using stack, queue and other approaches
    findNode
*/

/*  Graph
    BFS
    DFS
    Dijkstra's Shortest Path Algorithm
    Prim's Algorithm
    Kruskal's
    // more algos maybe but traversal is important
*/

/*  Algorithm Paradigms:
    Backtracking
    Branch and Bound
    Divide and Conquer
    Dynamic Programming
    String Matching // KMP, bruteforce
    Genetic Algorithms
    Numeric Algorithms
*/