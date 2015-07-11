var LinkedList = require("li_ds.linkedlist");

var ll = new LinkedList();
console.log(JSON.stringify(ll));
ll.push(1);
console.log(ll.list());
console.log(JSON.stringify(ll));
ll.push(2);
console.log(ll.list());
console.log(JSON.stringify(ll));
ll.push(3);
console.log(ll.list());
console.log(JSON.stringify(ll));
ll.push('a');
console.log(ll.list());
console.log(JSON.stringify(ll));
ll.push('b');
console.log(ll.list());
console.log(JSON.stringify(ll));
ll.push('c');
console.log(ll.list());
console.log(JSON.stringify(ll));
if (ll.length() != 6) {
    alert('push() not working right!!!');
}

while(ll.pop()) {
    console.log(ll.list());
};
if (ll.length() != 0) {
    alert('ll.length()::' + ll.length()
        + 'pop() not working right!!!');
}

ll.push(1);
console.log(ll.list());
ll.push(2);
console.log(ll.list());
ll.push(3);
console.log(ll.list());
ll.push('a');
console.log(ll.list());
ll.push('b');
console.log(ll.list());
ll.push('c');
console.log(ll.list());

var obj1 = {
    a: 1,
    z: 'xyzzy'
};
ll.insert(3, obj1);
console.log('after insert');
console.log(ll.list());

ll.remove(3);
console.log('after remove 3rd');
console.log(ll.list());

var llLength = ll.length();
for ( ; llLength ; llLength--) {
    ll.remove(llLength - 1);
    console.log('removing ' + llLength);
    console.log(ll.list());
}
if (ll.length() != 0) {
    alert('ll.length()::' + ll.length()
        + 'remove() not working right!!!');
}

ll.push(1);
console.log(ll.list());
ll.push(2);
console.log(ll.list());
ll.push(3);
console.log(ll.list());
ll.push('a');
console.log(ll.list());
ll.push('b');
console.log(ll.list());
ll.push('c');
console.log(ll.list());
ll.clear();
if (ll.length() > 0) {
    console.log('Clear() problem; not clearing!');
} else {
    console.log('Cleared!');
}
ll.push(1);
console.log(ll.list());
console.log(JSON.stringify(ll));
ll.push(2);
console.log(ll.list());
console.log(JSON.stringify(ll));
ll.push(3);
console.log(ll.list());
console.log(JSON.stringify(ll));
ll.push('a');
console.log(ll.list());
console.log(JSON.stringify(ll));
ll.push('b');
console.log(ll.list());
console.log(JSON.stringify(ll));
ll.push('c');
console.log(ll.list());
console.log(JSON.stringify(ll));
var result = null;

result = ll.find('a');
console.log('found:: ' + JSON.stringify(result));
result = ll.find(1);
console.log('found:: ' + JSON.stringify(result));
ll.clear();

