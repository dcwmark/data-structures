var Stack = require("li_ds.stack");

var stack = new Stack();
console.log(JSON.stringify(stack));
stack.push(1);
console.log(stack.list());
console.log(JSON.stringify(stack));
stack.push(2);
console.log(stack.list());
console.log(JSON.stringify(stack));
stack.push(3);
console.log(stack.list());
console.log(JSON.stringify(stack));
stack.push('a');
console.log(stack.list());
console.log(JSON.stringify(stack));
stack.push('b');
console.log(stack.list());
console.log(JSON.stringify(stack));
stack.push('c');
console.log(stack.list());
console.log(JSON.stringify(stack));
if (stack.length() != 6) {
    alert('push() not working right!!!');
}

while(stack.pop()) {
    console.log('popped' + stack.length() + '==>' + stack.list());
    console.log(JSON.stringify(stack));
}
if (stack.length() !== 0) {
    alert('stack.length()::' + stack.length() 
        + 'pop() not working right!!!');
}

stack.push(1);
console.log(stack.list());
stack.push(2);
console.log(stack.list());
stack.push(3);
console.log(stack.list());

var obj1 = {
    a: 1,
    z: 'abc'
};
stack.push(obj1);
console.log(stack.list());

var obj2 = {
    a: 2,
    z: 'xyz'
};
stack.push(obj2);
console.log(stack.list());

var obj3 = {
    a: 3,
    z: 'xyzzy'
};
stack.push(obj3);
console.log(stack.list());

stack.push('a');
console.log(stack.list());
stack.push('b');
console.log(stack.list());
stack.push('c');
console.log(stack.list());

do {
    var peekedElem = stack.peek();
    var poppedElem = stack.pop();
    console.log(' peekedElem ==> ' + JSON.stringify(peekedElem)
              + ' poppedElem ==> ' + JSON.stringify(poppedElem));
    if (null !== poppedElem) {
        if (peekedElem !== poppedElem) {
            console.log(' NOT matching!!!');
        }
    }
} while (poppedElem);

stack.push(1);
console.log(stack.list());
stack.push(2);
console.log(stack.list());
stack.push(3);
console.log(stack.list());
stack.clear();
console.log(JSON.stringify(stack));
if (stack.length() > 0) {
    console.log('Clear() problem; not clearing!');
} else {
    console.log('Cleared!');
}


