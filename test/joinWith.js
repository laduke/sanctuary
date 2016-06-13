'use strict';

var S = require('..');

var eq = require('./internal/eq');


describe('joinWith', function() {

  it('is a binary function', function() {
    eq(typeof S.joinWith, 'function');
    eq(S.joinWith.length, 2);
    eq(S.joinWith.toString(), 'joinWith :: String -> Array String -> String');
  });

  it('joins an array of strings with a separator', function() {
    eq(S.joinWith('', ['a', 'b', 'c']), 'abc');
    eq(S.joinWith(':', []), '');
    eq(S.joinWith(':', ['']), '');
    eq(S.joinWith(':', ['', '']), ':');
    eq(S.joinWith(':', ['', 'foo', '']), ':foo:');
    eq(S.joinWith(':', ['foo', 'bar', 'baz']), 'foo:bar:baz');
    eq(S.joinWith('::', ['foo', 'bar', 'baz']), 'foo::bar::baz');
  });

});
