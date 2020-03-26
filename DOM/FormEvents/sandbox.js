// const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     console.log(username.value);
// });





// const form = document.querySelector('.signup-form');

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     console.log(form.username.value);
// });

// // const username = 'sun';
// // const username = 'shaunp';
// const username = '@jsshaunp343sf@';
// const pattern = /[a-z]{6,}/;
// //in this case, we don't want an upper limit. We just want it to be at least six characters long.

// let result = pattern.test(username);
// //if it passes the test then it's going to return true if it doen't pass the test it return false
// console.log(result);






// const form = document.querySelector('.signup-form');

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     console.log(form.username.value);
// });

// // const username = '@jsshaunp343sf@';
// const username = 'jsshaunp';
// const pattern = /^[a-z]{6,}$/;
// //in this case, we don't want an upper limit. We just want it to be at least six characters long.

// let result = pattern.test(username);
// //if it passes the test then it's going to return true if it doen't pass the test it return false
// if (result) {
//     console.log('regex test passed :)');
// } eles{
//     console.log('regex test failed :(');
// }










// const form = document.querySelector('.signup-form');

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     console.log(form.username.value);
// });

// // const username = '@jsshaunp343sf@';
// // const username = 'jsshaunp123';
// const username = 'jsshaunp';
// const pattern = /^[a-z]{6,}$/;
// //in this case, we don't want an upper limit. We just want it to be at least six characters long.

// let result = username.search(pattern);
// console.log(result)






// const form = document.querySelector('.signup-form');

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     console.log(form.username.value);
// });

// // const username = '@jsshaunp343sf@';
// // const username = 'jsshaunp123';
// const username = '3434jsshaunp1234';
// const pattern = /[a-z]{6,}/;
// //in this case, we don't want an upper limit. We just want it to be at least six characters long.

// let result = username.search(pattern);
// console.log(result)













// //Basic Form Validation
// const form = document.querySelector('.signup-form');
// const feedback = document.querySelector('.feedback');

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     //validation
//     const username = form.username.value;
//     const usernamePattern = /^[a-zA-Z]{6,12}$/;

//     if (usernamePattern.test(username)) {
//         //feedback good info
//         feedback.textContent = 'that username is valid!';
//     } else {
//         //feedback help info
//         feedback.textContent = 'username must contain letters & only be between 6 and 12 characters long';
//     }
// });















//keyboard Event
// const form = document.querySelector('.signup-form');
// const feedback = document.querySelector('.feedback');

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     //validation
//     const username = form.username.value;
//     const usernamePattern = /^[a-zA-Z]{6,12}$/;

//     if (usernamePattern.test(username)) {
//         //feedback good info
//         feedback.textContent = 'that username is valid!';
//     } else {
//         //feedback help info
//         feedback.textContent = 'username must contain letters & only be between 6 and 12 characters long';
//     }
// });

// //live feedback
// form.username.addEventListener('keyup', e => {
//     console.log(e.target.value, form.username.value);
// })










const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    //validation
    const username = form.username.value;


    if (usernamePattern.test(username)) {
        //feedback good info
        feedback.textContent = 'that username is valid!';
    } else {
        //feedback help info
        feedback.textContent = 'username must contain letters & only be between 6 and 12 characters long';
    }
});

//live feedback
form.username.addEventListener('keyup', e => {
    if (usernamePattern.test(e.target.value)) {
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'error');
    }
})