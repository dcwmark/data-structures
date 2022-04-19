"use strict";

describe('stack', function() {
    console.log('***** test stack *****');
    
    var Stack = require("../stack");

    var items = null;
    var stack = null;

    beforeEach(function() {
        items = [ 1, 2, 3, 'a', 'b', 'c' ];
        stack = new Stack();
    });

    it('test push', function() {
        console.log('test push');
        for ( var item in items ) {
            stack.push(items[item]);
            console.log('pushed ' + items[item]);
            console.log(JSON.stringify(stack));
        }
        expect(stack.length()).toEqual(items.length);
    });

    it('test pop', function() {
        console.log('test pop');
        for ( var item in items ) {
            stack.push(items[item]);
            console.log('puehed ' + items[item]);
            console.log(JSON.stringify(stack));
        }
        expect(stack.length()).toEqual(items.length);

        var popped;
        var indx = stack.length() - 1;
        while (popped = stack.pop()) {
            console.log('popped::' + popped + ' item[indx]::' + items[indx]);
            expect(popped).toEqual(items[indx]);

            indx = stack.length() - 1;
        }
        expect(stack.length()).toEqual(0);
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
            stack.push(items[item]);
        }
        console.log('stack::' + stack.list());

        do {
            var peekedElem = stack.peek();
            var poppedElem = stack.pop();
            console.log(' peekedElem ==> ' + JSON.stringify(peekedElem)
                            + ' poppedElem ==> ' + JSON.stringify(poppedElem));
            expect(peekedElem).toEqual(poppedElem);
        } while (poppedElem);
    });

    it('test clear', function() {
        console.log('test clear');
        for ( var item in items ) {
            stack.push(items[item]);
            console.log('stacked ' + items[item]);
            console.log(JSON.stringify(stack));
        }
        stack.clear();
        expect(stack.length()).toEqual(0);
    });

    it('test isEmpty', function() {
        console.log('test isEmpty');
        expect(stack.isEmpty()).toBe(true);
        for ( var item in items ) {
            stack.push(items[item]);
            console.log('pushed ' + items[item]);
            console.log(JSON.stringify(stack));
        }
        expect(stack.isEmpty()).toBe(false);
        stack.clear();
        expect(stack.isEmpty()).toBe(true);
        expect(stack.length()).toEqual(0);
    });

    it('test Completed', function() {
        console.log('test Completed at ' + new Date());
    });
});
