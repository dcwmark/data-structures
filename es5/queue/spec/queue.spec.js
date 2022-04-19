"use strict";

describe('queue', function() {
    console.log('***** test queue *****');
    
    var Queue = require("../queue");

    var items = null;
    var queue = null;

    beforeEach(function() {
        items = [ 1, 2, 3, 'a', 'b', 'c' ];
        queue = new Queue();
    });

    it('test enqueue', function() {
        console.log('test enqueue');
        for ( var item in items) {
            queue.enqueue(items[item]);
            console.log('enqueued ' + items[item]);
            console.log(JSON.stringify(queue));
        }
        expect(queue.length()).toEqual(items.length);
    });

    it('test dequeue', function() {
        console.log('test dequeue');
        for ( var item in items) {
            queue.enqueue(items[item]);
            console.log('enqueued ' + items[item]);
            console.log(JSON.stringify(queue));
        }
        expect(queue.length()).toEqual(items.length);

        var dequeued;
        var indx = items.length - queue.length();
        while (dequeued = queue.dequeue()) {
            console.log('dequeued::' + dequeued + ' items[indx]::'
                            + items[indx]);
            expect(dequeued).toEqual(items[indx]);

            indx = items.length - queue.length();
        }
        expect(queue.length()).toEqual(0);
    });

    it('test peek', function() {
        console.log('test peek');
        var obj1 = {
                        alpha: 1,
                        omega: 'abc'
        };
        items.splice(3, 0, obj1);
        var obj2 = {
                        alpha: 2,
                        omega: 'xyz'
        };
        items.splice(4, 0, obj2);
        var obj3 = {
                        alpha: 3,
                        omega: 'xyzzy'
        };
        items.splice(5, 0, obj3);
        console.log('items::' + JSON.stringify(items));

        for ( var item in items) {
            queue.enqueue(items[item]);
        }
        console.log('queue::' + queue.list());

        do {
            var peekedElem = queue.peek();
            var dequeuedElem = queue.dequeue();
            console.log(' peekedElem ==> ' + JSON.stringify(peekedElem)
                            + ' dequeuepedElem ==> '
                            + JSON.stringify(dequeuedElem));
            expect(peekedElem).toEqual(dequeuedElem);
        } while (dequeuedElem);
    });

    it('test clear', function() {
        console.log('test clear');
        for ( var item in items) {
            queue.enqueue(items[item]);
            console.log('enqueued ' + items[item]);
            console.log(JSON.stringify(queue));
        }
        queue.clear();
        expect(queue.length()).toEqual(0);
    });

    it('test isEmpty', function() {
        console.log('test isEmpty');
        expect(queue.isEmpty()).toBe(true);
        for ( var item in items) {
            queue.enqueue(items[item]);
            console.log('enqueued ' + items[item]);
            console.log(JSON.stringify(queue));
        }
        expect(queue.isEmpty()).toBe(false);
        queue.clear();
        expect(queue.isEmpty()).toBe(true);
        expect(queue.length()).toEqual(0);
    });

    it('test Completed', function() {
        console.log('test Completed at ' + new Date());
    });
});
