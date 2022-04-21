/**
 * Base Conversion.
**/

var LI_DS = require('../../li_ds');
LI_DS.palindrome = require('../palindrome');

describe('palindrome', function () {
  console.log('***** palindrome test *****');

  var testValue = null,
    result = null;

  it('test 123456', function () {
    testValue = 123456;
    result = LI_DS.palindrome.isPalindrome(testValue);
    expect(result).toBeFalsy();
  });

  it('test abcde', function () {
    testValue = 'abcde';
    result = LI_DS.palindrome.isPalindrome(testValue);
    expect(result).toBeFalsy();
  });

  it('test 1221221', function () {
    testValue = 1221221;
    result = LI_DS.palindrome.isPalindrome(testValue);
    expect(result).toBeTruthy();
  });

  it('test racecar', function () {
    testValue = 'racecar';
    result = LI_DS.palindrome.isPalindrome(testValue);
    expect(result).toBeTruthy();
  });

  it('test ' + testValue, function () {
    testValue = {
      'a': 123,
      'z': 'xyz'
    };
    result = LI_DS.palindrome.isPalindrome(testValue);
    expect(result).toBeFalsy();
  });
});