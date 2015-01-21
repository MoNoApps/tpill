tpill
=====
Assertion synchronic test.

install
===
````bash
npm install tpill
````

usage
===
````js
// import
var TPill = require('tpill').TPill;
var tpill = new TPill();
// var tpill = new TPill(3000); wait 3 seconds

// add test
tpill.create(1, 1, 'My Test is True', true);
tpill.create(1, '1', 'My Second Test is True ', false);

// run all test
tpill.run(function(){
  process.exit()
});

````

api
===
````js
tpill.create(current, expected, testName, strict);
tpill.run(callback);
````
