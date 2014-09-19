'use strict';

/* global describe, it, should */


var jp = require('..');


describe('prettification', function(){

  var testObj = {astring : "This is a string", anum : 5, aflt : 5.5};
  var compacted = JSON.stringify(testObj);
  var pretty = JSON.stringify(testObj, null, ' ');

  it('should return prettified string from compacted', function(){
    jp(compacted).should.equal(pretty);
  });

  it('should return same string from prettified', function(){
    jp(pretty).should.equal(pretty);    
  });

});

