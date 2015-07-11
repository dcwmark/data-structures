var Queue = require("li_ds.queue");

var queue = new Queue();
queue.enqueue(1);
console.log(queue.list());
console.log(JSON.stringify(queue));
queue.enqueue(2);
console.log(queue.list());
console.log(JSON.stringify(queue));
queue.enqueue(3);
console.log(queue.list());
console.log(JSON.stringify(queue));
queue.enqueue('a');
console.log(queue.list());
console.log(JSON.stringify(queue));
queue.enqueue('b');
console.log(queue.list());
console.log(JSON.stringify(queue));
queue.enqueue('c');
console.log(queue.list());
console.log(JSON.stringify(queue));
if (queue.length() != 6) {
    alert('enqueue() not working right!!!');
}

while(queue.dequeue()) {
    console.log(queue.list());
};
if (queue.length() != 0) {
    alert('queue.length()::' + queue.length()
        + 'dequeue() not working right!!!');
}

queue.enqueue(1);
console.log(queue.list());
queue.enqueue(2);
console.log(queue.list());
queue.enqueue(3);
console.log(queue.list());

var obj1 = {
    a: 1,
    z: 'abc'
};
queue.enqueue(obj1);
console.log(queue.list());

var obj2 = {
    a: 2,
    z: 'xyz'
};
queue.enqueue(obj2);
console.log(queue.list());

var obj3 = {
    a: 3,
    z: 'xyzzy'
};
queue.enqueue(obj3);
console.log(queue.list());

queue.enqueue('a');
console.log(queue.list());
queue.enqueue('b');
console.log(queue.list());
queue.enqueue('c');
console.log(queue.list());

do {
    var peekedElem = queue.peek();
    var dequeuepedElem = queue.dequeue();
    console.log(' peekedElem ==> ' + JSON.stringify(peekedElem)
              + ' dequeuepedElem ==> ' + JSON.stringify(dequeuepedElem));
    if (null != dequeuepedElem) {
        if (peekedElem !== dequeuepedElem) {
            console.log(' NOT matching!!!');
        }
    }
} while (dequeuepedElem);

