const bl = require('bl');
var http = require('http');
var finalArr = [];
var count = 0;

//var url1 = process.argv[2];
//var url2 = process.argv[3];
//var url3 = process.argv[4];

function logResults(){
  for(var i =0; i < 3; i++)
  console.log(finalArr[i]);
}
function GetHttp (index){
  http.get(process.argv[2 + index], function(response){
    response.pipe(bl(function (err,data){
      if(err)
      return console.error(err)

      finalArr[index] = data.toString()
      count++

      if(count ==3)
      logResults();
    }))
  })
}
for(var i =0;i<3;i++)
GetHttp(i);

/*
http.get(url1, function callback(response){
  response.pipe(bl(function(err,data){
    console.log(data.toString());
  }))
})
http.get(url2, function callback(response){
  response.pipe(bl(function(err,data){
    console.log(data.toString());
  }))
})
http.get(url3, function callback(response){
  response.pipe(bl(function(err,data){
    console.log(data.toString());
  }))
})
*/
