/* 
var person = new Object();

person["firstname"] = "Tony";
person["lastname"] = "Alicea";

var firstNameProperty = "firstname";

console.log(person)
console.log(person[firstNameProperty])

console.log(person.firstname);
console.log(person.lastname)

person.address = new Object();
person.address.street = "111 Main St.";
person.address.city = "New York";
person.address.state = "NY";

console.log(person.address.street)      
console.log(person.address.city)        //New York
console.log(person["address"]["state"])  //NY

 */
var a = {};
var b = new Object();     // equal to 'var a = {};'
//console.log(a);
console.log(a.constructor === b.constructor); //true 
//var a = Object.create(); //Error since you didn't pass any parameters into the prototype
var b = Object.create(
    {
        a: 1,
        b: 2
    }
);
console.log('b:', b);

















