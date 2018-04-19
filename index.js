const names = require('./names.json');
module.exports = {
  allFirst: names.first,
  allLast: names.last,
  getFirst: getFirst,
  getLast: getLast,
  createName: createName,
  getUnicorn: getUnicorn // heehee 🐰
};

function getFirst() {
  const numOfFirstNames = names.first.length;
  let first = names.first[randomNum(numOfFirstNames)];
  return first;
}

function getLast() {
  const numOfLastNames = names.last.length;
  let last = names.last[randomNum(numOfLastNames)];
  return last;
}

function createName() {
  return `${getFirst()} ${getLast()}`;
}

function randomNum(max) {
  return Math.floor(Math.random() * max);
}

function getUnicorn() {
  let num = randomNum(11) + 1;
  let str = '';
  for (let i = 0; i < num; i++) {
    str += '🦄';
  }
  return str;
}
