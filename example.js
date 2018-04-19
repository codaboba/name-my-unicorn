const nameMyUnicorn = require('./');
const firstNames = nameMyUnicorn.allFirst;
console.log("firstNames: " + firstNames);

let fullName = nameMyUnicorn.createName();
console.log("fullName: " + fullName);

fullName = nameMyUnicorn.createName();
console.log("fullName: " + fullName);
