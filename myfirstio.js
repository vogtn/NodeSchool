var fs = require('fs');
var location = process.argv[2];

var str = (fs.readFileSync(location)).toString();
var splitStr = str.split('\n');
console.log((splitStr.length -1));
