// const list = document.querySelector('ul');
// const addRecipe = (recipe) => {
//     // console.log(recipe.created_at);
//     let time = recipe.created_at.toDate();
//     let html = `
//     <li>
//         <div>${recipe.title}</div>
//         <div>${time}</div>
//     </li>
//     `;
//     console.log(html);
//     list.innerHTML += html;
// }

// db.collection('recipes').get().then((snapshot) => {
//     //when we have the data
//     // console.log(snapshot.docs[0].data());
//     snapshot.docs.forEach((doc) => {
//         addRecipe(doc.data());
//     })
// }).catch((error) => {
//     console.log(error);
// })




















// //saving documents
// const list = document.querySelector('ul');
// const form = document.querySelector('form');

// const addRecipe = (recipe) => {
//     // console.log(recipe.created_at);
//     let time = recipe.created_at.toDate();
//     let html = `
//     <li>
//         <div>${recipe.title}</div>
//         <div>${time}</div>
//     </li>
//     `;
//     list.innerHTML += html;
// }

// db.collection('recipes').get().then((snapshot) => {
//     //when we have the data
//     // console.log(snapshot.docs[0].data());
//     snapshot.docs.forEach((doc) => {
//         addRecipe(doc.data());
//     })
// }).catch((error) => {
//     console.log(error);
// })

// // add documents
// form.addEventListener('submit', e => {
//     e.preventDefault();
//     const now = new Date();
//     const recipe = {
//         title: form.recipe.value,
//         created_at: firebase.firestore.Timestamp.fromDate(now)
//     };
//     db.collection('recipes').add(recipe).then(() => {
//         console.log('recipe added')
//     }).catch(error => {
//         console.log(error);
//     });
// })






















// //delete document
// const list = document.querySelector('ul');
// const form = document.querySelector('form');

// const addRecipe = (recipe, id) => {
//     // console.log(recipe.created_at);
//     let time = recipe.created_at.toDate();
//     let html = `
//     <li data-id="${id}">
//         <div>${recipe.title}</div>
//         <div>${time}</div>
//         <button class="btn btn-danger btn-sm my-2">delete</button>
//     </li>
//     `;
//     list.innerHTML += html;
// }

// db.collection('recipes').get().then((snapshot) => {
//     snapshot.docs.forEach((doc) => {
//         addRecipe(doc.data(), doc.id);
//     })
// }).catch((error) => {
//     console.log(error);
// })

// // add documents
// form.addEventListener('submit', e => {
//     e.preventDefault();
//     const now = new Date();
//     const recipe = {
//         title: form.recipe.value,
//         created_at: firebase.firestore.Timestamp.fromDate(now)
//     };
//     db.collection('recipes').add(recipe).then(() => {
//         console.log('recipe added')
//     }).catch(error => {
//         console.log(error);
//     });
// })

// //deleting data
// list.addEventListener('click', e => {
//     if (e.target.tagName === 'BUTTON') {
//         const id = e.target.parentElement.getAttribute('data-id');
//         db.collection('recipes').doc(id).delete().then(() => {
//             console.log('recipe delete')
//         });
//     }
// })
































//Real-time Listeners
//Unsubscribing
const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');

const addRecipe = (recipe, id) => {
    // console.log(recipe.created_at);
    let time = recipe.created_at.toDate();
    let html = `
    <li data-id="${id}">
        <div>${recipe.title}</div>
        <div>${time}</div>
        <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>
    `;
    list.innerHTML += html;
}

const deleteRecipe = (id) => {
    const recipes = document.querySelectorAll('li');
    recipes.forEach(recipe => {
        if (recipe.getAttribute('data-id') === id) {
            recipe.remove();
        }
    })
}

db.collection('recipes').get().then((snapshot) => {
    snapshot.docs.forEach((doc) => {
        addRecipe(doc.data(), doc.id);
    })
}).catch((error) => {
    console.log(error);
})

//get documents
const unsub = db.collection('recipes').onSnapshot(snapshot => {
    // console.log(snapshot.docChanges());
    snapshot.docChanges().forEach(change => {
        const doc = change.doc;
        if (change.type === 'added') {
            addRecipe(doc.data(), doc.id);
        } else if (change.type === 'removed') {
            deleteRecipe(doc.id);
        }
    })
});//every time the collection changes in any way, firestore takes a snapshot of that collection 
//an the snapshot represents the state of that conllection at that moment in time




// add documents
form.addEventListener('submit', e => {
    e.preventDefault();
    const now = new Date();
    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    };
    db.collection('recipes').add(recipe).then(() => {
        console.log('recipe added')
    }).catch(error => {
        console.log(error);
    });
})

//deleting data
list.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('recipes').doc(id).delete().then(() => {
            console.log('recipe delete')
        });
    }
})


//unsub from database changes
button.addEventListener('click', () => {
    unsub();
    console.log('unsubscribed from collection changes')
})