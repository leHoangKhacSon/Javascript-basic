//node moudule
//constructor function

console.log('Coders - Tokyo');

var Mouse = require('./mouse.js');
var Cat = require('./cat.js');

var mickey = new Mouse('orange');
var jerry = new Mouse('black');
console.log(mickey);
console.log(jerry);

var tom = new Cat();
console.log(tom);
tom.eat(mickey)
tom.eat(jerry);
console.log(tom);
