// //dates & times
// const now = new Date();
// console.log(now);
// // Fri Jul 26 2019 00:19:51 GMT-0700 (Pacific Daylight Time)

// console.log(typeof now); //object

// console.log('getFullYear:', now.getFullYear());
// console.log('getMonth:', now.getMonth());
// console.log('getDate:', now.getDate());
// console.log('getDay:', now.getDay());
// console.log('getHours:', now.getHours());
// console.log('getMinutes:', now.getMinutes());
// console.log('getSeconds:', now.getSeconds());

// /*
// getFullYear: 2019
// getMonth: 6
// getDate: 26
// getDay: 5
// getHours: 0
// getMinutes: 23
// getSeconds: 57
// */




// //tiemstamps
// console.log('timestamp', now.getTime());  //timestamp 1564125919286


// //date strings
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());

// /*
// Fri Jul 26 2019
// 00:26:40 GMT-0700 (Pacific Daylight Time)
// 7/26/2019, 12:26:40 AM
// */





















//timestamps
const before = new Date('February 1 2019 7:30:59');
const now = new Date();
console.log(now.getTime(), before.getTime());  //1564126348899 1549035059000

const diff = now.getTime() - before.getTime();
console.log(diff);    //15091331831


const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins, hours, days);
console.log(`the blog was written ${days} days ago`)
/*
251525 4192 175
the blog was written 175 days ago
*/

//converting timestamps into date objects
const timestamp = 1675938474990;
console.log(new Date(timestamp));
//2023-02-09T10:27:54.990Z
