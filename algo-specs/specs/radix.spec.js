/**
 * The radix sort works by making multipassed over a data set.
 * Only Radix LSD is implemented for *integer* sorting.
 * Radix MSD for lexical sort is not implemented.
 * Throw is not working with jasmine-node.  Needs solution.  
**/

var LI_DS = require('../../li_ds');
LI_DS.radix = require('../radix');

describe('radixSort', function () {
  console.log('***** radix test *****');

  it('lsdSort - to throw und', function () {
    var withUnd = [];
    var und;
    withUnd.push(44);
    withUnd.push(und);

    var result = LI_DS.radix.lsdSort(withUnd);

    expect(result).toEqual('List posn(1) contains null or undefined.');
  });

  it('lsdSort - to throw nil', function () {
    var withNil = [];
    var nil = null;
    withNil.push(44);
    withNil.push(nil);

    var result = LI_DS.radix.lsdSort(withNil);

    expect(result).toEqual('List posn(1) contains null or undefined.');
  });

  it('lsdSort - to throw alph', function () {
    var withAlfa = [];
    withAlfa.push('aplha');
    withAlfa.push('omega');

    var result = LI_DS.radix.lsdSort(withAlfa);

    expect(result).toEqual('List posn(0) is not a number.');
  });

  it('lsdSort - to throw flt', function () {
    var fltNumb = [];
    fltNumb.push(314);
    fltNumb.push(3.1416);
    fltNumb.push(31, 416);

    var result = LI_DS.radix.lsdSort(fltNumb);

    expect(result).toEqual('List posn(1) is not an integer.');
  });

  it('lsdSort', function () {
    var unsortedList = [10, 65, 85, 8, 1741, 25, 69, 101];
    var expectedList = [8, 10, 25, 65, 69, 85, 101, 1741];

    var result = LI_DS.radix.lsdSort(unsortedList);

    expect(result).toEqual(expectedList);
  });

  it('radix test Completed', function () {
    console.log('radix test Completed at ' + new Date());
  });
});
