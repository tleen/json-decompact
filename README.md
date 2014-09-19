json-decompact
==============

Javascript utility to take a compacted JSON string and prettify it

# Just One Thing

The module is the function, take a compacted json string, return it pretty printed:

```javascript

var obj = {astring : "This is a string", anum : 5, aflt : 5.5};
var compactJSON = JSON.stringify(obj);
console.log(compactJSON);
// {"astring":"This is a string","anum":5,"aflt":5.5}

var decompact = require('json-decompact');

console.log(decompact(compactJSON));
/*
{
 "astring": "This is a string",
 "anum": 5,
 "aflt": 5.5
}
*/
```
