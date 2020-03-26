
/*****************************
* Arrays
*/

// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names); //["John", "Ben", "Jane", "Mary"]

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');//[John", "Smith", 1990, "designer", false, "blue"]
john.unshift('Mr.');
console.log(john);//["Mr.", "John", "Smith", 1990, "designer", false, "blue"]

john.pop();
john.pop();
john.shift();
console.log(john); //["John", "Smith", 1990, "designer"]

console.log(john.indexOf(23));//-1

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);//John IS a designer



