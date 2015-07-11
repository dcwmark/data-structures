/**
 * Base Conversion.
**/

var LI_DS = require('../li_ds');
var Stack = require('../stack/stack');

LI_DS.baseConversion = (function () {
    'use strict';

    function numericCheck(value) {
        if (null === value || value === 'undefined' || isNaN(value)) {
            return false;
        }

        return typeof value === 'number';
    }

    function acceptableBase(base) {
        return (base > 1 && base < 10);
    }

    function _convert(numb, base) {
        if (!numb || !base) {
            return 'arg[0] && arg[1] missing.  '
                 + 'Both number and base required.';
        }
        if (!numericCheck(numb)) {
            return 'arg[0]:: ' + numb
                 + ' number to convert needs to be numeric';
        }
        if (!numericCheck(base)) {
            return 'arg[1]:: ' + base
                 + ' base of conversion needs to be numeric';
        }

        if (!acceptableBase(base)) {
            return 'base of:: ' + base
                 + ' conversion is not acceptable at this time';
        }

        var stack = new Stack();

        var quotient;
        while (numb) {
            quotient = Math.floor(numb / base);
            stack.push(numb - (quotient * base));
            numb = quotient;
        }

        var result = "";
        while (stack.length()) {
            result += stack.pop();
        }
        return Number(result);
    }

    return {
        convert: function (numb, base) {
            return _convert(numb, base);
        }
    };
}());

module.exports = LI_DS.baseConversion;
