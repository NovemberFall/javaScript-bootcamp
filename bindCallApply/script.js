function foo(){
    console.log('.call() executing...');
}
foo();
foo.call(); //this statement is equal to foo()
console.log('\n')

// function yo(){
//     console.log('Yo, '+ name + ' 我是 '+this.name);
// }

// var whh = {
//     name: '王花花'
// }

// var lsd = {
//     name: '李双蛋'
// }
// yo.call(whh) //Yo,  我是 王花花
// yo.call(lsd) //Yo,  我是 李双蛋
// console.log('\n')

//version2
function yo(name, a, b, c){
    console.log('Yo, '+ name + ' 我是 '+this.name);
}

var whh = {
    name: '王花花'
}

var lsd = {
    name: '李双蛋'
}
yo.call(whh, '招可爽', 1, 2, 3) //Yo, 招可爽 我是 王花花
//yo.call(lsd, '刘贝贝', 3, 2, 1) //Yo, 刘贝贝 我是 李双蛋
yo.apply(whh, ['招可爽', 1, 2, 3]) //Yo, 招可爽 我是 王花花

yobind = yo.bind(whh);
yobind('招可爽')
console.log('\n')


// Bind, call and apply
var john = {
    name: 'John',
    age: 25,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good '+timeOfDay+' ,Ladies '+
            'gentlemen! I\'m '+ this.name + 
            ', I\'m a '+this.job+' and I\'m '+
            this.age+ ' years old.');
        }else if(style === 'friendly'){
            console.log('Hey! What\'s up? I\'m '+ this.name + 
            ', I\'m a '+this.job+' and I\'m '+
            this.age+ ' years old. Have a nice '+
            timeOfDay + '.' );
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');
/*  output:
Good morning ,Ladies gentlemen! I'm John, I'm a teacher and I'm 25 years old.
 */
john.presentation.call(emily, 'friendly','afternoon');
/* output:
Hey! What's up? I'm Emily, I'm a designer and I'm 35 years old. Have a nice afternoon.
 */

// john.presentation.apply(emily, ['friendly', 'afternoon']);
// /*  output:
// Hey! What's up? I'm Emily, I'm a designer and I'm 35 years old. Have a nice afternoon.
//  */

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');
/* output:
Hey! What's up? I'm John, I'm a teacher and I'm 25 years old. Have a nice night. 
 */

 var emilyFormal = john.presentation.bind(emily, 'formal');
 emilyFormal('afternoon');
/* output
Good afternoon ,Ladies gentlemen! I'm Emily, I'm a designer and I'm 35 years old.
*/
console.log('\n')

/* function as arguments; bind method */
var years = [1990, 1965, 1937, 2005, 1998];
function arrayCalc(arr, fn){
    var arrRes = [];
    for(var i=0; i<arr.length; i++){
            arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2019 - el;
}

function isFullAge(limit, el){
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);






