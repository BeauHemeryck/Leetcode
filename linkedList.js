class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class NodeList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addFirstNode(node) {
        this.head = new Node(node, this.head);
        this.size++;
    }

    printData() {
        let current = this.head;

        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

let n1 = 100;
let n2 = 200;
let n3 = 300;
let n4 = 400;
let n5 = 500;

let list = new NodeList();
list.addFirstNode(n1);
list.addFirstNode(n2);
list.addFirstNode(n3);
list.addFirstNode(n4);
list.addFirstNode(n5);

list.printData();