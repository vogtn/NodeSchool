var fs = require('fs');
var length = undefined;

var filename = process.argv[2];

function findnewlines(callback){
fs.readFile(filename, function doneReading(err,data){
    length = data.toString().split("\n").length - 1;
    callback()
  })
}

function numberOfLines(){
  console.log(length);
}

findnewlines(numberOfLines);
