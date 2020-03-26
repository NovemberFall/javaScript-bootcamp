function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
  
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

/* We also learned that you can not add a new property to an existing object constructor: */
Person.nationality = "English";    // Error: 
console.log(myFather.nationality);  //undefined
console.log('\n')
  
// The correct way:
Person.prototype.nationality = "English";
console.log(myFather.nationality);   //output: English
console.log(myMother.nationality);   //output: English

// We also can change the prototype.property
Person.prototype.nationality = "Chinese";
console.log(myFather.nationality);   //output: Chinese
console.log(myMother.nationality);   //output: Chinese

//We can check the _proto_ if they are equal
console.log(myFather._proto_ === myMother._proto_); //True

//We also can check the instance's constructor
console.log(myFather.constructor);   //Point to function Person()
console.log('\n')

//We can define a new object
var myBrother = new myFather.constructor('Tom', 'Zheng', 30, 'black');
console.log(myBrother);
Person.prototype.nationality = "English";
console.log(myBrother.nationality);