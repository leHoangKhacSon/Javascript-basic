//if...else
//
//Syntax
//
//if(condition){
//  statment when true;
//}else {
//  statment when false;
//}
//example 1
function tossCoin(){
    var value = Math.random();
    if(value < 0.5){
        console.log('mat ngua');
    }else   {
        console.log('mat sap');
    }
}
tossCoin();

function countMoney(bills){
    var total = 0;
    for (bill of bills){
        if(!bill.fake){     //nếu không phải là fake.
            total += bill.value;
        }
        else{
            console.log('fake bills', bill);
        }
    }
    return total;
}
var bills = [
    { value: 1000},
    { value: 2000, fake: true},
    { value: 5000},
    { value: 10000},
    { value: 20000},
    { value: 50000},
    { value: 100000, fake: true},
    { value: 200000},
    { value: 500000}
];
var total = countMoney(bills);
console.log(total);

