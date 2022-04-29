/**
 * data-structures/algo-specs/algo.js
**/
'use strict';

var LI_DS = require('../li_ds');

LI_DS.algo = (function () {

  function _isNumeric(valu) {
    return !isNaN(parseFloat(valu)) && isFinite(valu);
  }

  function _isInteger(valu) {
    if (!valu && valu !== 0) { return false; }

    if (!_isNumeric(valu)) { return false; }

    return (valu ^ 0) === valu;
  }

  function _isPalindrome(valu) {
    var s = '' + valu;
    return s.split('').reverse().join('') === s;
  }

  function _isPrime(valu) {
    if (valu === 0 || valu === 1) { return false; }
    if (valu === 2 || valu === 3) { return true; }
    const oddestPrime = 2;
    if (valu % oddestPrime === 0) { return false; }

    var i = 3;
    /**
      Any number will not be divisible
      by a number bigger than half of itself. 
    **/
    const limit = Math.sqrt(valu);

    for (; i <= limit; i += 2) {
      if (valu % i === 0) { return false; }
    }

    return true;
  }

  function _listPrime(occurance) {
    if (!_isInteger(occurance)) { return null; }

    var result = [2, 3];
    var rLeng = result.length;
    var i = 5;
    do {
      if (_isPrime(i)) {
        result.push(i);
        rLeng = result.length;
      }
      i += 2;
    } while (rLeng < occurance);

    return result;
  }

  function _primeFactors(valu) {
    var factors = [];
    var divisor = 2;

    while (valu > 2) {
      if (valu % divisor === 0) {
        factors.push(divisor);
        valu = valu / divisor;
      } else {
        if (divisor > 2) {
          divisor += 2;
        } else {
          divisor++;
        }
      }
    }
    return factors;
  }

  function _factorial(valu) {
    var starter = 1;
    return Array.apply(0, Array(valu))
      .reduce(function (runningTotl, notUsed, stepIndx) {
        return runningTotl + runningTotl * stepIndx;
      }, starter);
  }

  function _fibonacci(valu) {
    return valu < 2 ?
      valu
      : _fibonacci(valu - 1) + _fibonacci(valu - 2);
  }

  function _gcd(var1, var2) {
    // Only needs to test the second one
    // as ONLY the math operation is performed
    // ONLY on the second param!!!!
    if (var2 === 0) {
      return var1;
    } else {
      return _gcd(var2, var1 % var2);
    }
  }

  return {
    isNumeric: function (valu) {
      return _isNumeric(valu);
    },

    isPalindrome: function (valu) {
      if (!valu) { return false; }
      if (typeof valu === 'object') { return false; }

      return _isPalindrome(valu);
    },

    isPrime: function (valu) {
      if (!_isInteger(valu) && valu !== 0) {
        console.error('isPrime param::'
          + JSON.stringify(valu)
          + ' not integer');
        return false;
      }

      return _isPrime(valu);
    },

    listPrime: function (occurance) {
      return _listPrime(occurance);
    },

    primeFactors: function (valu) {
      if (!(_isInteger(valu) && valu > 0)) {
        console.error('primeFactor param::'
          + JSON.stringify(valu)
          + ' not integer');
        return false;
      }

      return _primeFactors(valu);
    },

    factorial: function (valu) {
      if (!(_isInteger(valu) && valu > 0)) {
        console.error('factorial param::'
          + JSON.stringify(valu)
          + ' not integer');
        return false;
      }

      return _factorial(valu);
    },

    fibonacci: function (valu) {
      if (!(_isInteger(valu) && valu > 0)) {
        console.error('fibonacci param::'
          + JSON.stringify(valu)
          + ' not integer');
        return false;
      }

      return _fibonacci(valu);
    },

    gcd: function (var1, var2) {
      if ((!var1) && (!var2)) {
        return 'gcd missing both params';
      }

      return _gcd(var1, var2);
    }
  };
}());

module.exports = LI_DS.algo;
