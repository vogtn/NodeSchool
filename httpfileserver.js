var http = require('http');
var fs = require('fs');

var port = process.argv[2];

var server = http.createServer(function(req,res){
  var filename = process.argv[3];
  var readStream = fs.createReadStream(filename);

  readStream.on('open', function(){
    readStream.pipe(res);
  });
  
})
server.listen(port);
