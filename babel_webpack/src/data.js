// const users = [
//     { name: 'mario', premium: true },
//     { name: 'luigi', premium: false },
//     { name: 'yoshi', premium: true },
//     { name: 'toad', premium: true },
//     { name: 'peach', premium: false }
// ];

// export const getPremUser = (users) => {
//     return users.filter(users => users.premium);
// }

// export default users;












const users = [
    { name: 'mario', premium: true },
    { name: 'luigi', premium: false },
    { name: 'yoshi', premium: true },
    { name: 'toad', premium: true },
    { name: 'peach', premium: false }
];

const getPremUser = (users) => {
    return users.filter(users => users.premium);
}

export { getPremUser, users as default }