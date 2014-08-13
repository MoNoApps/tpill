tpill
=====

MoNoApps Test Pill

Usage
===
Install
````bash
npm install tpill
````
Import, create and run
````js
var TPill = require('tpill').TPill;
var tpill = new TPill();
tpill.create(1, 1, 'My Test is True', true);
tpill.create(1, '1', 'My Second Test is True ', false);
tpill.run(function(){
  process.exit()
});

````
