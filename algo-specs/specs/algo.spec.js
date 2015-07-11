var LI_DS = require('../../li_ds');
LI_DS.algo= require('../algo');

describe('algo specs', function() {
    console.log('***** algo specs *****');
    
    it('isPalindrome spec', function() {
        var testValue, result;

        testValue = 123456;
        result = LI_DS.algo.isPalindrome(testValue);
        expect(result).toBeFalsy();
    
        testValue = 'abcde';
        result = LI_DS.algo.isPalindrome(testValue);
        expect(result).toBeFalsy();
    
        testValue = 1221221;
        result = LI_DS.algo.isPalindrome(testValue);
        expect(result).toBeTruthy();
    
        testValue = 'racecar';
        result = LI_DS.algo.isPalindrome(testValue);
        expect(result).toBeTruthy();
    
        testValue = {
            'a': 123,
            'z': 'xyz'
        };
        result = LI_DS.algo.isPalindrome(testValue);
        expect(result).toBeFalsy();
    });

    it('isPrime spec', function() {
        var result;
        
        result = LI_DS.algo.isPrime();
        expect(result).toBeFalsy();
        
        result = LI_DS.algo.isPrime(null);
        expect(result).toBeFalsy();
        
        result = LI_DS.algo.isPrime('xyzzy');
        expect(result).toBeFalsy();
        
        result = LI_DS.algo.isPrime( { key: 123 } );
        expect(result).toBeFalsy();
        
        result = LI_DS.algo.isPrime(0);
        expect(result).toBeFalsy();
        
        result = LI_DS.algo.isPrime(1);
        expect(result).toBeFalsy();
        
        result = LI_DS.algo.isPrime(2);
        expect(result).toBeTruthy();
        
        result = LI_DS.algo.isPrime(3);
        expect(result).toBeTruthy();
        
        result = LI_DS.algo.isPrime(5);
        expect(result).toBeTruthy();
        
        result = LI_DS.algo.isPrime(9);
        expect(result).toBeFalsy();
        
        result = LI_DS.algo.isPrime(28);
        expect(result).toBeFalsy();
        
        result = LI_DS.algo.isPrime(137);
        expect(result).toBeTruthy();
        
        result = LI_DS.algo.isPrime(237);
        expect(result).toBeFalsy();
        
        result = LI_DS.algo.isPrime(997);
        expect(result).toBeTruthy();
    });
    
    it('listPrime spec', function() {
        var actual, expected;
        
        expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
        actual = LI_DS.algo.listPrime(10);
        expect(actual).toEqual(expected);
        
        var expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
                        31, 37, 41, 43, 47, 53, 59, 61, 67, 71];
        actual = LI_DS.algo.listPrime(20);
        expect(actual).toEqual(expected);
        
        console.log('***** list Prime 220::' + LI_DS.algo.listPrime(220));
        console.log('***** list Prime 500::' + LI_DS.algo.listPrime(500));
    });
    
    it('primeFactor spec', function() {
        var actual, expected;
        
        actual = LI_DS.algo.primeFactors('xyzzy');
        console.log('"xyzzy" prime factors:: ' + actual);
        expect(actual).toBeFalsy();
        
        actual = LI_DS.algo.primeFactors(-321);
        console.log('-321 prime factors:: ' + actual);
        expect(actual).toBeFalsy();
        
        expected = [3, 23];
        actual = LI_DS.algo.primeFactors(69);
        console.log('69 prime factors:: ' + actual.join(' X '));
        expect(actual).toEqual(expected);
        
        expected = [3, 7, 7];
        actual = LI_DS.algo.primeFactors(147);
        console.log('147 prime factors:: ' + actual.join(' X '));
        expect(actual).toEqual(expected);
        
        expected = [2, 2, 2, 2, 2, 3, 3, 3];
        actual = LI_DS.algo.primeFactors(864);
        console.log('864 prime factors:: ' + actual.join(' X '));
        expect(actual).toEqual(expected);
    });
    
    it('factorial spec', function() {
        var actual, expected;
        
        actual = LI_DS.algo.factorial('xyzzy');
        console.log('"xyzzy" factorial:: ' + actual);
        expect(actual).toBeFalsy();
        
        actual = LI_DS.algo.factorial(-6969);
        console.log('-6969 factorial:: ' + actual);
        expect(actual).toBeFalsy();
        
        actual = [];
        expected = [1,2,6,24,120,720,5040,40320,362880,3628800,
                    39916800,479001600,6227020800,87178291200,
                    1307674368000,20922789888000,355687428096000,
                    6402373705728000,121645100408832000];
        for (var i = 1; i < 20; i++) {
            actual.push(LI_DS.algo.factorial(i));
        }
        console.log('20 factorial array::' + actual);
        expect(actual).toEqual(expected);
    });
    
    it('fibonacci spec', function() {
        var actual, expected;
        
        actual = LI_DS.algo.fibonacci('xyzzy');
        console.log('"xyzzy" fibonacci:: ' + actual);
        expect(actual).toBeFalsy();
        
        actual = LI_DS.algo.fibonacci(-6969);
        console.log('-6969 fibonacci:: ' + actual);
        expect(actual).toBeFalsy();
        
        actual = [];
        expected = [1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,
                    1597,2584,4181,6765,10946,17711,28657,46368,
                    75025,121393,196418,317811,514229];
        for (var i = 1; i < 30; i++) {
            actual.push(LI_DS.algo.fibonacci(i));
        }
        console.log('fib array::' + actual);
        expect(actual).toEqual(expected);
    });

    it('gcd spec', function() {
        var actual, expected;

        expected = 'gcd missing both params';
        actual = LI_DS.algo.gcd();
        expect(actual).toEqual(expected);

        expected = 7;
        actual = LI_DS.algo.gcd(14, 21);
        expect(actual).toEqual(expected);

        expected = 1;
        actual = LI_DS.algo.gcd(69, 169);
        expect(actual).toEqual(expected);

        expected = 69;
        actual = LI_DS.algo.gcd(69, 0);
        expect(actual).toEqual(expected);

        expected = 69;
        actual = LI_DS.algo.gcd(0, 69);
        expect(actual).toEqual(expected);

        expected = 6;
        actual = LI_DS.algo.gcd(54, 24);
        expect(actual).toEqual(expected);

        expected = 12;
        actual = LI_DS.algo.gcd(48, 180);
        expect(actual).toEqual(expected);
    });
    
    it('algo specs Completed', function() {
        console.log('algo specs Completed at ' + new Date());
    });
});