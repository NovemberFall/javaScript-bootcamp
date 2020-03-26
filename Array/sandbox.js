// const scores = [10, 30, 15, 25, 50, 40, 5];
// const filteredScores = scores.filter((score) => {
//     return score > 20;
// });

// console.log(filteredScores);







// const users = [
//     { name: 'shaun', permium: true },
//     { name: 'yoshi', permium: false },
//     { name: 'mario', permium: false },
//     { name: 'chun-li', permium: true },
// ];

// // const permiumUsers = users.filter((user) => {
// //     return user.permium;
// // })

// const permiumUsers = users.filter((user) => user.permium);
// console.log(permiumUsers);









// //map method
// const prices = [10, 30, 15, 25, 50, 40, 5, 80];

// const salePrices = prices.map((price) => {
//     return price / 2;
// })

// console.log(salePrices);












// const products = [
//     { name: 'gold star', price: 20 },
//     { name: 'mushroom', price: 40 },
//     { name: 'green shells', price: 30 },
//     { name: 'banana skin', price: 10 },
//     { name: 'red shells', price: 50 },
// ];
// const saleProducts = products.map((product) => {
//     if (product.price > 30) {
//         product.price = product.price / 2;
//         return product;
//     } else {
//         return product;
//     }
// })
// console.log(saleProducts, products);











// const products = [
//     { name: 'gold star', price: 20 },
//     { name: 'mushroom', price: 40 },
//     { name: 'green shells', price: 30 },
//     { name: 'banana skin', price: 10 },
//     { name: 'red shells', price: 50 },
// ];

// const saleProducts = products.map((product) => {
//     if (product.price > 30) {
//         return {
//             name: product.name,
//             price: product.price / 2
//         }
//     } else {
//         return product;
//     }
// })

// console.log(saleProducts, products);











// //reduce method
// const scores = [10, 30, 15, 25, 70, 90, 30];

// const result = scores.reduce((accumulator, currentValue) => {
//     if (currentValue > 50) {
//         accumulator++;
//     }
//     return accumulator;
// }, 0);

// console.log(result);











// const scores = [
//     { player: 'mario', score: 50 },
//     { player: 'yoshi', score: 30 },
//     { player: 'mario', score: 70 },
//     { player: 'crystal', score: 60 }
// ];

// const marioTotal = scores.reduce((acc, curr) => {
//     if (curr.player === 'mario') {
//         acc += curr.score;
//     }
//     return acc;
// }, 0);

// console.log(marioTotal);














// // Find method
// const scores = [10, 5, 0, 40, 60, 10, 20, 70];

// const firstHighScore = scores.find((score) => {
//     return score > 50;
// });
// console.log(firstHighScore);













// //sort method

// //example 1 - sorting strings
// const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

// names.sort();
// console.log(names);


// //example 2 - sorting numbers
// const scores = [10, 50, 20, 5, 35, 70, 45];
// scores.sort();
// console.log(scores);


// //example 3 - sorting objects
// const players = [
//     { name: 'mario', score: 20 },
//     { name: 'luigi', score: 10 },
//     { name: 'chun-li', score: 50 },
//     { name: 'yoshi', score: 30 },
//     { name: 'shaun', score: 70 }
// ];

// players.sort((a, b) => {
//     if (a.score > b.score) {
//         return -1;
//     } else if (b.score > a.score) {
//         return 1;
//     } else {
//         return 0;
//     }
// });

// console.log(players)







// //example 3 - sorting objects
// const players = [
//     { name: 'mario', score: 20 },
//     { name: 'luigi', score: 10 },
//     { name: 'chun-li', score: 50 },
//     { name: 'yoshi', score: 30 },
//     { name: 'shaun', score: 70 }
// ];

// players.sort((a, b) => b.score - a.score);
// console.log(players)






// //example 2 - sorting numbers
// const scores = [10, 50, 20, 5, 35, 70, 45];
// scores.sort((a, b) => b - a)
// console.log(scores)













// //chaining array methods
// const products = [
//     { name: 'gold star', price: 30 },
//     { name: 'green shell', price: 10 },
//     { name: 'red shells', price: 40 },
//     { name: 'banana skin', price: 5 },
//     { name: 'mushroom', price: 50 },
// ];

// const filtered = products.filter(product => product.price > 20);
// const promos = filtered.map(product => {
//     return `the ${product.name} is ${product.price / 2} pounds`;
// });
// console.log(promos);









//chaining array methods
const products = [
    { name: 'gold star', price: 30 },
    { name: 'green shell', price: 10 },
    { name: 'red shells', price: 40 },
    { name: 'banana skin', price: 5 },
    { name: 'mushroom', price: 50 },
];

const promos = products
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} pounds`);
console.log(promos);
