var mymodule = require('./modular.js');
//var directory = process.argv[2];
//var fileType = "." + process.argv[3];

mymodule(process.argv[2], process.argv[3], function(err,list){
  if(err) return (err);
})
