// Node class
class Node {
    constructor(data, next) {
        this.data = data;
        this.next = null;
    }
}

// Linked list
class LinkedList {
    constructor(head, tail, size) {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(data) {
        const newNode = new Node(data);
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size += 1;
    }

    prepend(data) {
        const newNode = new Node(data);
        const current = this.head;
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.head.next = current;
        }
        this.size += 1;
    }

    len() {
        console.log(this.size);
    }

    at(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let current = 0;
        let currentNode = this.head;
        while (currentNode !== null && current < index) {
            currentNode = currentNode.next;
            current++;
        }
        console.log(currentNode);
    }

    find(value) {
        if (!value) {
            return null;
        }
        let currentNode = value;
        let current = 0;
        while (currentNode !== null && currentNode !== value) {
            currentNode = currentNode.next;
            current++;
        }
        console.log(current);
    }

    pop() {
        if (!this.head) {
            return null;
        }

        let current = this.head;
        let prev = null;

        while (current.next !== null) {
            prev = current;
            current = current.next;
        }

        if (prev === null) {
            this.head = null;
            this.tail = null;
        } else {
            prev.next = null;
            this.tail = prev;
        }
        this.size -= 1;
        return current.data;
    }

    contains(data) {
        if (!this.head) {
            return null;
        }
        let current = this.head;
        while (current !== null) {
            if (current.data === data) {
                return true;
            }
        }
        return false;
    }

    toString() {
        let current = this.head;
        let result = "";

        while (current.next !== null) {
            result += current.data + " -> ";
            current = current.next;
        }
        result += "null";
        console.log(result);
    }
}
