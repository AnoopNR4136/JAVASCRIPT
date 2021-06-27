/*
NOTE :
*CONSTRUCTOR-PROTOTYPE is same as CLASS 

*Every JS object have PROTOTYPE-PROPERTY wihch makes inheritanc epossible in js

*PROTOTYPE-PROPERTY  of an object where we put methods 

*




*/

//Person is not a variable it is CONSTRUCTOR-PROTOTYPE same as CLASS in othr languages
var Person = function (name, yob, job) { 

    this.name = name;
    this.yob = yob;
    this.job = job;
    this.calcAge = function () {
        console.log("Age =",2021-this.yob)
    }
}
/*Person can access function inside it and inside .prototype 
.prototype is defaul object which have some default functions and also we can add fn to protype

*/
Person.prototype.CalculateAge = function () {//CalculateAge inherited frm protype
    console.log("Age from prototype=", 2021 - this.yob)
}

Person.prototype.Lastname = 'Smith' //Lastname can acces from Person=>prototyp(default object whic have some othe property)=>lastname

var john = new Person('Anil', '1994', 'nill')
john.calcAge();
console.log(john)
console.log(john.yob)

console.log(john.Lastname)
console.log(john.CalculateAge)
