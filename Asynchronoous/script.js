// //Synchronous
// const second = () => {
//     console.log('Async Hey there')
// }

// const first = () => {
//     console.log('Hey there');
//     second();
//     console.log("The end");
// }
// first();


// //Asynchornous
// const second = () => {
//     setTimeout(() => {
//         console.log('Async Hey there')
//     }, 3000);
// }

// const another = () => {
//     setTimeout(() => {
//         console.log('Async another there')
//     }, 2000);
// }

// const third = () => {
//     console.log('third');
// }
// const forth = () => {
//     console.log('forth');
// }
// const fifth = () => {
//     console.log('fifth');
// }
// const sixth = () => {
//     console.log('sixth');
// }

// const first = () => {
//     console.log('Hey there');
//     second();
//     another();
//     third();
//     forth();
//     fifth();
//     sixth();
//     console.log("The end");
// }
// first();
















// //The Old Way: Asynchronous javaScript with Callbacks
// function getRecipe() {
//     setTimeout(() => {
//         const recipeID = [523, 883, 432, 974];
//         console.log(recipeID);

//         setTimeout((id) => {
//             const recipe = { title: 'Fresh tomato pasta', publisher: 'Jonas' };
//             console.log(`${id}: ${recipe.title}`);

//             setTimeout(publisher => {
//                 const recipe2 = { title: 'Italian Piazza', publisher: 'Jonas' };
//                 console.log(recipe);
//             }, 1500, recipe.publisher);

//         }, 1500, recipeID[2]);

//     }, 1500);
// }
// getRecipe();














// //From Callback Hell to Promises

// /* Passing two callback functions: resolve , reject
// that's because this executor function here is used to inform the promise
// whether the event it is handing was successful or not
// And if it was successful we're going to call the resolve function;
// if not we call the reject function
// */
// const getIDS = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([523, 883, 432, 974]);
//         //since setTimeout function is alawys finished, we don't neet to call reject function

//     }, 1500);
// });

// const getRecipe = recID => {
//     return new Promise((resolve, reject) => {
//         setTimeout(ID => {
//             const recipe = {title: 'Fresh tomato pasta', publisher:'Jonas'};
//             console.log(`${ID}: ${recipe.title}`);
//         }, 1500, recID);
//     });
// };








// getIDS.then(IDs => {
//     console.log(IDs);
//     return getRecipe(IDs[2]);
// })
// .then(recipe => {
//     console.log(recipe);
// })
// .catch(error => {
//     console.log('Error!!');
// });











// const getIDS = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([523, 883, 432, 974]);
//         //since setTimeout function is alawys finished, we don't neet to call reject function

//     }, 1500);
// });

// const getRecipe = (recID) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(ID => {
//             const recipe = { title: 'Fresh tomato pasta', publisher: 'Jonas' };
//             resolve(`${ID}: ${recipe.title}`);
//         }, 1500, recID);
//     });
// };

// const getRelated = (publisher) => {
//     return new Promise((resolve, reject) => {
//         setTimeout((pub) => {
//             const recipe = { title: 'Italian Piazza', publisher: 'Jonas' };
//             resolve(`${pub}: ${recipe.title}`);
//         }, 1500, publisher);
//     });
// }


// getIDS
//     .then(IDs => {
//         console.log(IDs);
//         return getRecipe(IDs[2]);
//     })
//     .then(recipe => {
//         console.log(recipe);
//         return getRelated('Jonas');
//     })
//     .then(recipe => {
//         console.log(recipe);
//     })
//     .catch(error => {
//         console.log('Error!!');
//     });
















// //Async/Await
// const getIDS = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([523, 883, 432, 974]);
//         //since setTimeout function is alawys finished, we don't neet to call reject function

//     }, 1500);
// });
// const getRecipe = (recID) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(ID => {
//             const recipe = { title: 'Fresh tomato pasta', publisher: 'Jonas' };
//             resolve(`${ID}: ${recipe.title}`);
//         }, 1500, recID);
//     });
// };
// const getRelated = (publisher) => {
//     return new Promise((resolve, reject) => {
//         setTimeout((pub) => {
//             const recipe = { title: 'Italian Piazza', publisher: 'Jonas' };
//             resolve(`${pub}: ${recipe.title}`);
//         }, 1500, publisher);
//     });
// }

// async function getRecipeAW() {
//     const IDs = await getIDS;
//     console.log(IDs);
//     const recipe = await getRecipe(IDs[2]);
//     console.log(recipe);
//     const related = await getRelated('Jonas Schmedtamnn');
//     console.log(related);
// }

// getRecipeAW();
















//Making AJAX Calls with Fetch and Promises
// fetch
//     ('http://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2487956/')
//     .then((result) => {
//         console.log(result);
//         return result.json();
//         //here will return a promise because this actually happens asynchronously,
//         //this conversion to JSON, 
//     })
//     .then(data => {
//         // console.log(data);
//         const today = data.consolidated_weather[0];
//         console.log(`Temperatures in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`);
//     })
//     .catch(error => {
//         console.log(error);
//     });







// function getWeather(woeid) {
//     fetch
//         (`http://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
//         .then((result) => {
//             console.log(result);
//             return result.json();
//             //here will return a promise because this actually happens asynchronously,
//             //this conversion to JSON, 
//         })
//         .then(data => {
//             // console.log(data);
//             const today = data.consolidated_weather[0];
//             console.log(`Temperatures in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`);
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }
// getWeather(2487956);
// getWeather(44418); //London ID















// //Making AJAX Calls with Fetch and Async/Await

// async function getWeatherAW(woeid) {

//     try {
//         const result =
//             await fetch(`http://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
//         const data = await result.json();
//         const tomorrow = data.consolidated_weather[1];
//         console.log(`Temperatures in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}.`);
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getWeatherAW(2487956);
// getWeatherAW(44418); //London ID














