/**
  * TPill object with some config  vars.
  **/
var TPill = function(time){
  this.CHECK_MARK =  String.fromCharCode(0x2713);
  this.BALLOT_X = String.fromCharCode(0x2717);
  this.SURPRISE = String.fromCharCode(8264);
  this.MESSAGES = {
    stats: '\nStatistics:'
  };
  this.TIMEOUT = time || 0;
  this.STATS = {
    pass: 0,
    fail: 0,
    warn: 0
  };
  this.LIST = [];
};

/*Create a test.
  @current, is the actual value obtained
  @expected, is the value you are expecting
  @name, the name o the test
  @strict, flag to test with or without strict
*/
TPill.prototype.create = function(current, expected, name, strict) {
  this.LIST.push({
    current: current || false,
    expected: expected || false,
    name: name || false,
    strict: strict || false
  });
};

TPill.prototype.assertEquals = function(test) {
  if (test.strict) {
    if (test.current == test.expected) {
      return true;
    } else {
      return false;
    }
  } else {
    if (test.current == test.expected) {
      return true;
    } else {
      return false;
    }
  }
};

TPill.prototype.run = function(cb) {
  var tpill = this;
  //Reset counters
  tpill.STATS = {
      pass: 0, fail: 0, warn: 0
  };

  for (var index in tpill.LIST) {
    if (!tpill.LIST[index].name) {
      tpill.STATS.warn++;
      console.log(tpill.SURPRISE + ' Ignored: ' + JSON.stringify(tpill.LIST[index]));
    } else {
      var assert = tpill.assertEquals(tpill.LIST[index]);
      if (assert) {
        tpill.STATS.pass++;
        console.log(tpill.CHECK_MARK + ' ' + tpill.LIST[index].name);
      } else {
        tpill.STATS.fail++;
        console.log(tpill.BALLOT_X + ' ' + tpill.LIST[index].name);
      }
    }
  }

  setTimeout(function () {
    console.log(tpill.MESSAGES['stats'] + ' ' + JSON.stringify(tpill.STATS));
    if (cb){
      cb();
    }
  },tpill.TIMEOUT);
};

TPill.prototype.results = function(cb) {
  cb(this.STATS);
};

module.exports.TPill = TPill;
