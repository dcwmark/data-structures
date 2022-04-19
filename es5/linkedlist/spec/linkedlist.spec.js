"use strict";

describe('linkedlist', function() {
    console.log('***** test linkedlist *****');
    
    var LinkedList = require("../linkedlist");

    var items = null;
    var ll = null;

    beforeEach(function() {
        items = [ 1, 2, 3, 'a', 'b', 'c' ];
        ll = new LinkedList();
    });

    it('test push (insert)', function() {
        console.log('test push (insert)');
        for ( var item in items) {
            ll.push(items[item]);
            console.log('inserted ' + items[item]);
            console.log(JSON.stringify(ll));
        }
        expect(ll.length()).toEqual(items.length);
    });

    it('test pop (delete)', function() {
        console.log('test pop (delete)');
        for ( var item in items) {
            ll.push(items[item]);
        }
        while (ll.pop()) {
            console.log(JSON.stringify(ll));
        }
        expect(ll.length()).toEqual(0);
    });

    it('test get', function() {
        console.log('test get');
        for ( var item in items) {
            ll.push(items[item]);
        }
        console.log(JSON.stringify(ll));

        var i, l = items.length;
        for (i = 0; i < l; i++) {
            console.log('ll item[' + i + ']::'
                            + JSON.stringify(ll.get(i).element));
            expect(ll.get(i).element).toEqual(items[i]);
        }
    });

    it('test find', function() {
        console.log('test find');
        for ( var item in items) {
            ll.push(items[item]);
        }
        console.log(JSON.stringify(ll));

        var i, l = items.length;
        for (i = 0; i < l; i++) {
            console.log('ll item[' + i + ']::'
                            + JSON.stringify(ll.find(items[i]).element));
            expect(ll.find(items[i]).element).toEqual(items[i]);
        }
    });

    it('test insert (insert on specific position)', function() {
        console.log('test insert (insert on specific position)');
        for ( var item in items) {
            ll.push(items[item]);
        }

        var obj1 = {
                        alpha: 1,
                        omega: 'xyzzy'
        };
        ll.insert(3, obj1);
        console.log(JSON.stringify(ll));

        var found = ll.find(obj1);
        console.log('found::' + JSON.stringify(found.element));
        expect(found.element).toEqual(obj1);

        var got = ll.get(3);
        console.log('got::' + JSON.stringify(got.element));
        expect(obj1).toEqual(got.element);
    });

    it('test clear', function() {
        console.log('test clear');
        for ( var item in items) {
            ll.push(items[item]);
        }
        ll.clear();
        expect(ll.length()).toEqual(0);
    });

    it('test isEmpty', function() {
        console.log('test isEmpty');
        expect(ll.isEmpty()).toBe(true);

        for ( var item in items) {
            ll.push(items[item]);
        }
        expect(ll.isEmpty()).toBe(false);
        ll.clear();
        expect(ll.isEmpty()).toBe(true);
    });

    it('test Completed', function() {
        console.log('test Completed at ' + new Date());
    });
});
