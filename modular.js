var fs = require('fs');
var path = require('path');



module.exports = function findmatch(directory,fileType,callback){
  fs.readdir(directory, function (err,list){
    if(err){
      return callback(err);
    }
    for(var i = 0; i < list.length; i++){
      if(path.extname(list[i].toString()) == "." +  fileType){
        console.log(list[i]);
      }
    }
    return callback(null,list)
  })
}
