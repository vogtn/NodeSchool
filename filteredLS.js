var fs = require('fs');
var path = require("path");

var directory = process.argv[2];
var fileType = "." + process.argv[3];

fs.readdir(directory, function callback (err,list){
  for(var i = 0; i < list.length; i++){
    if(path.extname(list[i].toString()) == fileType){
      console.log(list[i]);
    }
  }
})
