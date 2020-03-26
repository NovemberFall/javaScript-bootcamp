// const greet = name => {
//     console.log(`hello ${name}`);
// }

// greet('mario');
// greet('luigi');
// greet('link');
// greet('link');





















//Introduction to Modules
// import './dom';

// console.log('index file');
// addTitle('test')











// import { styleBody, addTitle } from './dom';

// console.log('index file');
// addTitle('test')
// styleBody();










// import { styleBody, addTitle, contact } from './dom';

// console.log('index file');
// addTitle('test')
// styleBody();
// console.log(contact);




















// //Default Exports
// import { styleBody, addTitle, contact } from './dom';
// import users, { getPremUser } from './data';

// const premUsers = getPremUser(users);
// console.log(users, premUsers);

// console.log('test 2');






















//webpack dev server
import { styleBody, addTitle, contact } from './dom';
import users, { getPremUser } from './data';

const premUsers = getPremUser(users);
console.log(users, premUsers);

console.log('test 3');