# name-my-unicorn 🦄

> 🦄 Randomly generate partial or full names for your unicorn

`name-my-unicorn` is library of names that are suitable for naming magical creatures. The library is exported as an object with several properties and methods.



## How to use it

| **Property** | Type  | Example Output                      | **Description**                  |
| ------------ | ----- | ----------------------------------- | -------------------------------- |
| allFirst     | array | ["Rainbow", "Silver", "Cupcake"]    | outputs all possible first names |
| allLast      | array | ["Passion", "Striker", "Sprinkles"] | outputs all possible last names  |

```javascript
const nameMyUnicorn = require('name-my-unicorn');
const firstNames = nameMyUnicorn.allFirst;
console.log(firstNames);
// ["Rainbow", "Silver", "Cupcake"]
```

| **Method**   | Type   | Example Output    | Description                                                  |
| ------------ | ------ | ----------------- | ------------------------------------------------------------ |
| getFirst()   | string | "Rainbow"         | outputs a single string from list of first names             |
| getLast()    | string | "Passion"         | outputs a single string from a list of last names            |
| createName() | string | "Rainbow Passion" | outputs a single string that represents a randomly generated first and last name |

```javascript
let fullName = nameMyUnicorn.createName();
console.log(fullName);
// "Rainbow Passion"

fullName = nameMyUnicorn.createName();
console.log(fullName);
// "Silver Rocket"
```