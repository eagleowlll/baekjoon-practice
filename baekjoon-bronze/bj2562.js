const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const A = input.map(Number);
const index = A.indexOf(Math.max(...A));

console.log(`${Math.max(...A)}\n${index + 1}`);
