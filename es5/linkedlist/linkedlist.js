function LinkedList() {
    "use strict";

    this.first = null;
    this.last = null;

    var listSize = 0;

    var Node = {
        element: null,
        next: null
    };

    function numericCheck(posn) {
        if (null === posn || posn === 'undefined' || isNaN(posn)) {
            return false;
        }

        return typeof posn === 'number';
    }

    function makeNode(element) {
        if (null === element || element === 'undefined') {
            return "Pleasae provide a valid element or object";
        }

        var newNode = Object.create(Node);
        newNode.element = element;
        newNode.next = null;
        return newNode;
    }

    this.push = function (element) {
        var newNode = makeNode(element);

        if (!this.first) {
            this.first = this.last = newNode;
            this.first.next = null;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        listSize += 1;
        return this;
    };

    this.pop = function () {
        if (!this.first) {
            return null;
        }

        var startedNode = this.first;
        this.first = this.first.next;
        startedNode.next = null;
        listSize -= 1;
        return startedNode;
    };

    this.insert = function (posn, element) {
        if (!numericCheck(posn)) {
            return 'Position needs to be a valid numeric element in arg[0]';
        }
        if (null === element || element === 'undefined') {
            return "Pleasae provide a valid element or object in arg[1]";
        }
        if (posn < 0) {
            return "You have provided a negative position in arg[0]";
        }
        if (posn > this.length()) {
            return "You are trying to insert into a position" +
                   " outside of the list";
        }

        if (posn === 0) {
            this.push(element);
            return this;
        }

        var newNode = makeNode(element);

        var nodePriorPosn = this.get(posn - 1);
        newNode.next = nodePriorPosn.next;
        nodePriorPosn.next = newNode;
        listSize += 1;
        return this;
    };

    this.remove = function (posn) {
        if (!this.first) {
            return 'The list is empty!  Nothing to remove.';
        }

        if (posn < 0) {
            return "You have provided a negative position in arg[0]";
        }
        if (posn > this.length()) {
            return "You are trying to insert into a position" +
                   " outside of the list";
        }

        if (posn === 0) {
            this.pop();
            return this;
        }

        var nodeToRemove = this.get(posn);
        var nodePriorPosn = this.get(posn - 1);
        nodePriorPosn.next = nodeToRemove.next;
        listSize -= 1;
        return this;
    };

    this.clear = function () {
        this.first = null;
        this.last = null;
        listSize = 0;
    };

    this.length = function () {
        return listSize;
    };

    this.isEmpty = function () {
        return listSize === 0;
    };

    this.list = function () {
        if (!this.first) {
            return 'List is empty.';
        }

        var listArray = [], i = 0, node = this.first;
        do {
            listArray.push('node ' + i++ + ' :: '
                         + JSON.stringify(node.element));
            node = node.next;
        } while (node);

        return listArray;
    };

    this.get = function (posn) {
        if (!numericCheck(posn)) {
            return 'Position needs to be a valid numeric element';
        }
        if (!this.first) {
            return null;
        }

        var node = this.first, i = 0;
        while (node) {
            if (i === posn) {
                return node;
            }
            node = node.next;
            i++;
        }

        return null;
    };

    this.find = function (item) {
        if (!this.first) {
            return null;
        }

        var currNode = this.first;
        while (currNode.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    };
}

module.exports = LinkedList;