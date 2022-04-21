/**
 * Two Stack Expression Evaluation.
 * 
 * This module is just a playful solution to evaluate arithmetic expression,
 * with a very limited range of expression.  It is not an implementation for
 * a more generalized arithmetic expression parser.
**/

var LI_DS = require('../li_ds');
var Stack = require('../stack/stack');

LI_DS.twoStackEval = (function () {
  'use strict';

  function numericCheck(value) {
    if (null === value || value === 'undefined' || isNaN(value)) {
      return false;
    }

    return typeof value === 'number';
  }

  function _evaluate(expression) {
    var expressions = expression.split(' ');
    var operands = new Stack();
    var operators = new Stack();

    var leng = expressions.length, i, op;
    for (i = 0; i < leng; i++) {
      switch (op = expressions[i]) {
        case '(':
          break;
        case '+':
        case '-':
        case '*':
        case '/':
        case '**':
        case 'sqrt':
          operators.push(op);
          break;
        case ')':
          var operand = parseFloat(operands.pop());
          if (!numericCheck(operand)) {
            return 'position [' + i + '] expects to be numeric BUT '
              + 'found [' + JSON.stringify(operand) + ']';
          }
          var operator = operators.pop();

          switch (operator) {
            case '+':
              operand =
                parseFloat(operands.pop()) + operand;
              break;
            case '-':
              operand =
                parseFloat(operands.pop()) - operand;
              break;
            case '**':
              operand =
                Math.pow(parseFloat(
                  operands.pop()), operand);
              break;
            case '*':
              operand =
                parseFloat(operands.pop()) * operand;
              break;
            case '/':
              operand =
                parseFloat(operands.pop()) / operand;
              break;
            case 'sqrt':
              operand = Math.sqrt(operand);
              break;
          }
          operands.push(operand);
          break;
        default:
          operands.push(op);
      }
    }
    return operands.pop();
  }

  return {
    evaluate: function (expression) {
      return _evaluate(expression);
    }
  };
}());

describe('two_stack_eval', function () {
  console.log('***** two_stack_eval test *****');

  var expression = null,
    result = null;

  it('evaluate ', function () {
    expression = '( ( 2 ** 3 ) + ( 5 * 4 ) )';
    console.log('expression:: ~ ' + expression + ' ~');
    result = LI_DS.twoStackEval.evaluate(expression);
    expect(result).toBe(28);
  });

  it('evaluate ', function () {
    expression = '( 1 + ( ( 2 + 3 ) * ( 4 * 5 ) ) )';
    console.log('\nexpression:: ~ ' + expression + ' ~');
    result = LI_DS.twoStackEval.evaluate(expression);
    expect(result).toBe(101);
  });

  it('evaluate ', function () {
    expression = '( ( 1 + sqrt ( 5.0 ) ) / 2.0 )';
    console.log('\nexpression:: ~ ' + expression + ' ~');
    result = LI_DS.twoStackEval.evaluate(expression);
    expect(result).toBe(1.618033988749895);
  });

  it('two_stack_eval test Completed', function () {
    console.log('two_stack_eval test Completed at ' + new Date());
  });
});
