const user = {
    id: 1910,
    name: 'rafia',
    depeartment: 'CSE',
    owner: {
        profession: 'student',
        roll: 50032
    }
}
//console.log(user);
const stringified = JSON.stringify(user);
//console.log(stringified);
const pasrsing = JSON.parse(stringified);
console.log(pasrsing.owner.roll);
