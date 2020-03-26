// const getTodos = () => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         // console.log(request, request.readyState);
//         if (request.readyState === 4 && request.status === 200) {
//             console.log(request, request.responseText);
//         } else if (request.readyState === 4) {
//             console.log('could not fetch the data');
//         }
//     });

//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
//     request.send();
// }

// getTodos();















// const getTodos = (callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         // console.log(request, request.readyState);
//         if (request.readyState === 4 && request.status === 200) {
//             callback(undefined, request.responseText);
//         } else if (request.readyState === 4) {
//             callback('could not fetch data', undefined);
//         }
//     });

//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
//     request.send();
// }


// console.log(1)
// console.log(2)
// getTodos((error, data) => {
//     console.log('callback is fired.');
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(data);
//     }
// });
// console.log(3)
// console.log(4)





















// const getTodos = (callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         // console.log(request, request.readyState);
//         if (request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText);
//             callback(undefined, data);
//         } else if (request.readyState === 4) {
//             callback('could not fetch data', undefined);
//         }
//     });

//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
//     request.send();
// }


// console.log(1)
// console.log(2)
// getTodos((error, data) => {
//     console.log('callback is fired.');
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(data);
//     }
// });
// console.log(3)
// console.log(4)

















// //create our JSON data
// const getTodos = (callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         if (request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText);
//             callback(undefined, data);
//         } else if (request.readyState === 4) {
//             callback('could not fetch data', undefined);
//         }
//     });

//     request.open('GET', 'todos.json');
//     request.send();
// }

// getTodos((error, data) => {
//     console.log('callback is fired.');
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(data);
//     }
// });

















//callback Hell
const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('could not fetch data', undefined);
        }
    });

    request.open('GET', resource);
    request.send();
};

getTodos('todos/luigi.json', (error, data) => {
    console.log(data);
});