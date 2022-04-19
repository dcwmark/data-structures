function Stack() {
    "use strict";

    this.topOfStack = null;

    var stackSize = 0;

    var Node = {
        element: null,
        prev: null
    };

    this.push = function (element) {
        var newNode = Object.create(Node);
        newNode.element = element;

        if (null === this.topOfStack) {
            this.topOfStack = newNode;
        } else {
            newNode.prev = this.topOfStack;
            this.topOfStack = newNode;
        }

        stackSize += 1;
        return this;
    };

    this.peek = function () {
        if (null === this.topOfStack) {
            return null;
        }

        return this.topOfStack.element;
    };

    this.pop = function () {
        if (null === this.topOfStack) {
            return null;
        }

        var popped = this.topOfStack;
        this.topOfStack =this.topOfStack.prev;
        popped.prev = null;
        stackSize -= 1;
        return popped.element;
    };

    this.clear = function () {
        this.topOfStack = null;
        stackSize = 0;
    };

    this.length = function () {
        return stackSize;
    };

    this.isEmpty = function () {
        return stackSize === 0;
    };

    this.list = function () {
        if (null === this.topOfStack) {
            return null;
        }

        var listArray = [], i = this.length(), node = this.topOfStack;
        do {
            listArray.push(
                    'elem ' + i-- + ' :: ' + JSON.stringify(node.element));
            node = node.prev;
        } while (node);

        return listArray;
    };
}

module.exports = Stack;
