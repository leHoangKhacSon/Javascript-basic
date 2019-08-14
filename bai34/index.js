//ternary operator
// SYNTAX:
// condition ? expression when true: express when false
function tossCoin(){
    var value = Math.random();
    var result = (value < 0.5) ? 'mat sap' : 'mat ngua;';
    console.log(result);
}
tossCoin();