/**
 * Base Conversion Spec.
**/

var LI_DS = require('../../li_ds');
LI_DS.baseConversion = require('../base_conversion');

describe('base_conversion', function () {
  console.log('***** base_conversion test *****');

  var numb = null,
    base = null,
    result = null;

  it('test null param', function () {
    result = LI_DS.baseConversion.convert();
    expect(result).toBe('arg[0] && arg[1] missing.  '
      + 'Both number and base required.');
  });

  it('test both number and base missing', function () {
    result = LI_DS.baseConversion.convert(numb, base);
    expect(result).toBe('arg[0] && arg[1] missing.  '
      + 'Both number and base required.');
  });

  it('test missing base', function () {
    numb = 1;
    result = LI_DS.baseConversion.convert(numb);
    expect(result).toBe('arg[0] && arg[1] missing.  '
      + 'Both number and base required.');
  });

  it('test non-numeric base', function () {
    numb = 1;
    base = 'a';
    result = LI_DS.baseConversion.convert(numb, base);
    expect(result).toBe('arg[1]:: ' + base
      + ' base of conversion needs to be numeric');
  });

  it('test base of 1', function () {
    numb = 1;
    base = 1;
    result = LI_DS.baseConversion.convert(numb, base);
    expect(result).toBe('base of:: ' + base
      + ' conversion is not acceptable at this time');
  });

  it('test base of 10', function () {
    numb = 1;
    base = 10;
    result = LI_DS.baseConversion.convert(numb, base);
    expect(result).toBe('base of:: ' + base
      + ' conversion is not acceptable at this time');
  });

  it('test 1 base of 2', function () {
    numb = 1;
    base = 2;
    result = LI_DS.baseConversion.convert(numb, base);
    expect(result).toBe(1);
  });

  it('test 32 base of 2', function () {
    numb = 32;
    base = 2;
    result = LI_DS.baseConversion.convert(numb, base);
    expect(result).toBe(100000);
  });

  it('test 125 base of 8', function () {
    numb = 125;
    base = 8;
    result = LI_DS.baseConversion.convert(numb, base);
    expect(result).toBe(175);
  });

  it('test 77 base of 3', function () {
    numb = 77;
    base = 3;
    result = LI_DS.baseConversion.convert(numb, base);
    expect(result).toBe(2212);
  });

  it('base_conversion test Completed', function () {
    console.log('base_conversion test Completed at ' + new Date());
  });

});
