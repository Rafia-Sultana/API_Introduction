const user = {
    id: 1910,
    name: 'rafia',
    depeartment: 'CSE'
}
console.log(user);
const stringified = JSON.stringify(user);
console.log(stringified);
const pasrsing = JSON.parse(stringified);
console.log(pasrsing.name);