console.log('this is non-blocking callback');
console.log('next function doesn\'t have to wait');
var fs = require('fs');
fs.readFile('input.txt', function(err, data){
if(err) return console.error(err);
console.log(data.toString());
});
console.log('next function');
