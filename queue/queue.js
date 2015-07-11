function Queue() {
    "use strict";

    this.headOfQueue = null;
    this.tailOfQueue = null;

    var queueSize = 0;

    var Node = {
        element: null,
        next: null
    };

    this.enqueue = function (element) {
        var newNode = Object.create(Node);
        newNode.element = element;

        if (queueSize < 1) {
            this.headOfQueue = this.tailOfQueue = newNode;
            this.headOfQueue.next = null;
        } else {
            this.tailOfQueue.next = newNode;
            this.tailOfQueue = newNode;
        }

        queueSize += 1;
        return this;
    };

    this.peek = function () {
        if (queueSize < 1) {
            return null;
        }

        return this.headOfQueue.element;
    };

    this.head = function () {
        if (queueSize < 1) {
            return null;
        }

        return this.headOfQueue.element;
    };

    this.tail = function () {
        if (queueSize < 1) {
            return null;
        }

        return this.tailOfQueue.element;
    };

    this.dequeue = function () {
        if (queueSize < 1) {
            return null;
        }

        var dequeued = this.headOfQueue;
        this.headOfQueue = this.headOfQueue.next;
        dequeued.next = null;
        queueSize -= 1;
        return dequeued.element;
    };

    this.clear = function () {
        this.headOfQueue = null;
        this.tailOfQueue = null;

        queueSize = 0;
    };

    this.length = function () {
        return queueSize;
    };

    this.isEmpty = function (){
        return queueSize === 0;
    };

    this.list = function () {
        if (queueSize < 1) {
            return null;
        }

        var listArray = [], i = 0, node = this.headOfQueue;
        do {
            listArray.push('elem ' + i++ + ' :: '
                         + JSON.stringify(node.element));
            node = node.next;
        } while (node);

        return listArray;
    };
}

module.exports = Queue;
