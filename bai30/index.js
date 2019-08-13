//Node built - in modules
var fs = require('fs'); //filesystem

//readFileSync method
var text = fs.readFileSync('bai30/hello.txt', {encoding: 'utf8'});
console.log(text);

//writeFileSync method 
fs.writeFileSync('bai30/hello.txt', 'oke! chao son.');
