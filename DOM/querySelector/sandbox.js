// const para = document.querySelector('div.error');
// console.log(para);


// const para = document.querySelector('body > h1');
// console.log(para);



// const para = document.querySelectorAll('p');
// console.log(para);




// const para = document.querySelectorAll('p');
// console.log(para[2]);



// const para = document.querySelectorAll('p');
// para.forEach(para => {
//     console.log(para);
// });




// const errors = document.querySelectorAll('.error');
// console.log(errors);




//get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);





// get element by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);






//get element by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras)
// console.log(paras[1])






// const para = document.querySelector('p');
// console.log(para.innerText);
// console.log(para.innerHTML);
// console.log(para.textContent);





// changing Page content
// const para = document.querySelector('p');
// para.innerText = 'ninjas are awesome!'






// const paras = document.querySelectorAll('p');
// paras.forEach(element => {
//     console.log(element.innerText);
//     element.innerText = 'has been changed ...';
// })






// const content = document.querySelector('.content');
// console.log(content.innerHTML);
// console.log(content.innerText);
// content.innerHTML = '<h2>This is a new H2</h2>';








// const content = document.querySelector('.content');
// const people = ['mario', 'luigi', 'yoshi'];
// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });







// const content = document.querySelector('.content');
// const people = ['mario', 'luigi', 'yoshi'];
// people.forEach(person => {
//     content.innerHTML += `${person}` + '<br>';
// });








// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));



// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'http://www.apple.com');
// link.innerText = 'vscode';

// const msg = document.querySelector('p');
// console.log(msg.getAttribute('class'));
// msg.setAttribute('class', 'success');
// msg.setAttribute('style', 'color:green');










// const title = document.querySelector('h1');
// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'purple';
// title.style.fontSize = '60px';
// //title.style.margin = '';   //remove margin








// const content = document.querySelector('p');
// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');










// const paras = document.querySelectorAll('p');
// paras.forEach(p => {
//     if (p.textContent.includes('error')) {
//         p.classList.add('error');
//     }
//     if (p.innerText.includes('success')) {
//         p.classList.add('success');
//     }
// });

// const title = document.querySelector('.title');
// title.classList.toggle('test');
// title.classList.toggle('test');










// //parent children siblings
// const article = document.querySelector('article');
// // console.log(article.children);
// // console.log(Array.from(article.children))

// Array.from(article.children).forEach((child) => {
//     child.classList.add('article-element');
// });











// //click event
// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     console.log('click me!');
// });


// const items = document.querySelectorAll('li');
// items.forEach(item => {
//     item.addEventListener('click', (e) => {
//         console.log('item clicked');
//     })
// })


// const items = document.querySelectorAll('li');
// items.forEach(item => {
//     item.addEventListener('click', (e) => {
//         console.log(e);
//     })
// })


// const items = document.querySelectorAll('li');
// items.forEach(item => {
//     item.addEventListener('click', (e) => {
//         console.log(e.target);
//         console.log(item);
//     })
// })


// const items = document.querySelectorAll('li');
// items.forEach(item => {
//     item.addEventListener('click', (e) => {
//         e.target.style.textDecoration = 'line-through';
//     })
// })


















//Creating & Removing Elements

// const ul = document.querySelector('ul');
// // ul.remove();

// const items = document.querySelectorAll('li');
// items.forEach(item => {
//     item.addEventListener('click', (e) => {
//         // e.target.style.textDecoration = 'line-through';
//         e.target.remove();
//     })
// })



// const ul = document.querySelector('ul');
// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     ul.innerHTML += '<li>something new</li>';
// });

// const items = document.querySelectorAll('li');
// items.forEach(item => {
//     item.addEventListener('click', (e) => {
//         // e.target.style.textDecoration = 'line-through';
//         e.target.remove();
//     })
// })




// const ul = document.querySelector('ul');
// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     const li = document.createElement('li');
//     li.textContent = 'something new to do';
//     // ul.append(li);
//     ul.prepend(li);
// });

// const items = document.querySelectorAll('li');
// items.forEach(item => {
//     item.addEventListener('click', (e) => {
//         console.log('event in LI');
//         e.stopPropagation();
//         e.target.remove();
//     })
// })

// ul.addEventListener('click', e => {
//     console.log('event in UL');
// });











// const ul = document.querySelector('ul');
// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     const li = document.createElement('li');
//     li.textContent = 'something new to do';
//     // ul.append(li);
//     ul.prepend(li);
// });

// ul.addEventListener('click', e => {
//     if (e.target.tagName === 'LI') {
//         e.target.remove();
//     }
// });
















// // More Dom Event
// const copy = document.querySelector('.copy-me');
// copy.addEventListener('copy', () => {
//     console.log('my content is copyright');
// });

// const box = document.querySelector('.box');
// box.addEventListener('mousemove', e => {
//     //console.log(e);
//     // console.log(e.offsetX, e.offsetY);
//     box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`;
// })


// document.addEventListener('wheel', e => {
//     console.log(e.pageX, e.pageY)
// })











//Building a Popup
const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper')
const close = document.querySelector('.popup-close')

button.addEventListener('click', () => {
    popup.style.display = 'block';
})

close.addEventListener('click', () => {
    popup.style.display = 'none';
})

popup.addEventListener('click', () => {
    popup.style.display = 'none';
})