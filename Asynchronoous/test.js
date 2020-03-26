// console.log('here we go');
// new Promise(resolve => {
//     setTimeout(() => {
//         resolve('hello');
//         console.log(123);
//     }, 2000);
// })
//     .then(name => {
//         console.log(name + ' world');
//     });





// console.log('here we go');
// setTimeout(() => {
//     greeting("hello");
//     console.log(123);
// }, 2000)

// function greeting(name) {
//     console.log(name + ' world');
// }











// console.log('here we go');
// new Promise(resolve => {
//     setTimeout(() => {
//         resolve('hello');
//     }, 2000);
// })
//     .then(value => {
//         console.log(value);
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 resolve('world');
//             }, 2000);
//         });
//     })
//     .then(value => {
//         console.log(value + ' world');
//     });









// console.log('start');
// let promise = new Promise(resolve => {
//     setTimeout(() => {
//         console.log('the promise fulfilled');
//         resolve('hello, world');
//     }, 1000);
// });

// setTimeout(() => {
//     promise.then(value => {
//         console.log(value);
//     });
// }, 3000);











// console.log('here we go');
// new Promise(resolve => {
//     setTimeout(() => {
//         resolve('hello');
//     }, 2000);
// })
//     .then(value => {
//         console.log(value);
//         console.log('everyone');
//         (function () {
//             return new Promise(resolve => {
//                 setTimeout(() => {
//                     console.log('Mr.Laurence');
//                     resolve('Merry Xmas');
//                 }, 2000);
//             });
//         }());
//         return false;
//     })
//     .then(value => {
//         console.log(value + ' world');
//     });










// console.log('here we go');
// new Promise(resolve => {
//     setTimeout(() => {
//         resolve('hello');
//     }, 2000);
// })
//     .then(value => {
//         console.log(value);
//         console.log('everyone');
//         (function () {
//             return new Promise(resolve => {
//                 setTimeout(() => {
//                     console.log('Mr.Laurence');
//                     resolve('Merry Xmas');
//                 }, 2000);
//             });
//         }()).then(value => {
//             console.log(value + ' world');
//         });
//     })







