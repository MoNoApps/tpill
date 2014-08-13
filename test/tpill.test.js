var TPill = require('../tpill.js').TPill;
var tpill = new TPill();
var assert = require("assert");

describe('describe TPill', function(){

  describe('#TPill()', function(){
    it('TPill should instance of TPill', function(){
      assert.ok(tpill instanceof TPill);
    })

    it('TPill should have a stats', function(){
      assert.equal('\nStatistics:', tpill.MESSAGES.stats);
    })

    it('TPill should have a stats object', function(){
      assert.equal('object', typeof tpill.STATS);
    })

    it('TPill should have an emtpy list for tests', function(){
      assert.equal(0, tpill.LIST.length);
    })

    it('TPill should add one test to the list', function(){
      tpill.create('test', 'test', 'Must to pass',true);
      assert.equal(1, tpill.LIST.length);
    })

    it('TPill should add on ignored test', function(){
      tpill.create();
      assert.equal(2, tpill.LIST.length);
    })

    it('TPill should run and return stats', function(done){
      tpill.create('test', '', 'Must to fail',true);
      tpill.run(done);
    })

  })

})
