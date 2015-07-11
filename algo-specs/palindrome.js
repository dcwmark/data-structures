/**
 * Base Conversion.
**/

var LI_DS = require('../li_ds');
var Stack = require('../stack/stack');

LI_DS.palindrome = (function () {
    'use strict';

    function _isPalindrome(value) {
        if (null === value
        ||  value === 'undefined'
        ||  value.length < 1) {
            return null;
        }
        if (typeof value === 'object') {
            console.error('cannot evaluate object type');
            return false;
        }
        console.log('value ::' + JSON.stringify(value));

        var stack = new Stack();

        value = JSON.stringify(value);
        var leng = value.length, i;
        for (i = 0; i < leng; i++) {
            stack.push(value[i]);
        }

        var newVal = "";
        while (stack.length() > 0) {
            newVal += stack.pop();
        }
        console.log('newVal::' + newVal);

        return value === newVal;
    }

    return {
        isPalindrome: function (value) {
            return _isPalindrome(value);
        }
    };
}());

module.exports = LI_DS.palindrome;