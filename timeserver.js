var net = require('net');

var port = process.argv[2];

var server = net.createServer(function(socket){
  var now = new Date();
  var getYear = now.getFullYear().toString() + "-";
  var getMonth = (('0'+ (now.getMonth() + 1)).slice(-2)).toString() + "-";
  var getDate = (('0'+ (now.getDate())).slice(-2)).toString();
  var getHours = now.getHours();
  var getMinutes = (('0'+ (now.getMinutes())).slice(-2)).toString();
  var fullDate = getYear + getMonth + getDate + " " + getHours+ ":" + getMinutes + "\n";

  socket.write(fullDate);
  socket.end();
})
server.listen(port);
