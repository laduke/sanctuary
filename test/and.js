'use strict';

var S = require('..');

var eq = require('./internal/eq');


describe('and', function() {

  it('is a binary function', function() {
    eq(typeof S.and, 'function');
    eq(S.and.length, 2);
    eq(S.and.toString(), 'and :: Boolean -> Boolean -> Boolean');
  });

  it('has && semantics', function() {
    eq(S.and(false, false), false);
    eq(S.and(false, true), false);
    eq(S.and(true, false), false);
    eq(S.and(true, true), true);
    eq(S.and(new Boolean(false), new Boolean(false)), false);
    eq(S.and(new Boolean(false), new Boolean(true)), false);
    eq(S.and(new Boolean(true), new Boolean(false)), false);
    eq(S.and(new Boolean(true), new Boolean(true)), true);
  });

});
