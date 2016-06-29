
var sum = 0;
var number;
for(var i=2; i < process.argv.length; i++){
  number= Number(process.argv[i]);
  sum += number;
  }
console.log(sum);
