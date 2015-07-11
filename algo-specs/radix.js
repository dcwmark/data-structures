/**
 * The radix sort works by making multi-passes over a data set.
 * Only Radix LSD is implemented for *integer* sorting.
 * Radix MSD for lexical sort is not implemented.
 * Throw is not working with jasmine-node.  Needs solution.  
**/

var LI_DS = require('../li_ds');
var Queue = require('../queue/queue');

LI_DS.radix = (function () {
    'use strict';
    
    function _lsdSort(list) {
        
        var bins = [];
        for( var bin = 0; bin < 10; bin++ ) {
            bins[bin] = new Queue();
        }

        var done = false,
            mod = 10,
            div = 1,
            lengList = list.length,
            lengBins = bins.length,
            i;
        
        console.log('\nBefore radix.lsd::' + list);
        for( ; !done ; mod *= 10, div *= 10 ) {
            done = true;

            for( i = 0; i < lengList; i++ ) {
                if ( div < 10 ) {
                    if ( ! list[i] ) {
                        return 'List posn(' + i + ') '
                             + 'contains null or undefined.';
                    }
                    if ( isNaN(list[i]) ) {
                        return 'List posn(' + i + ') is not a number.';
                    }
                    if ( list[i] % 1 !== 0 ) {
                        return 'List posn(' + i + ') is not an integer.';
                    }
                }

                var bin = Math.floor( list[i] % mod / div );
                bins[bin].enqueue(list[i]);
                
                if (bin > 0) {
                    done = false;
                }
            }
            
            var dequeued;
            list = [];
            for ( i = 0; i < lengBins; i++ ) {
                while ( dequeued = bins[i].dequeue() ) {
                    list.push(dequeued);
                }
            }
        }
        console.log('\nAfter  radix.lsd::' + list);
        return list;
    }
    
    return {
        lsdSort: function(list) {
            return _lsdSort(list);
        }
    };
}());

module.exports = LI_DS.radix;