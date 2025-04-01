const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const result = input.map(Number);
const A = result[0];
const B = result[1];
const C = result[2];

console.log(A + B - C);
console.log(Number(String(A) + String(B)) - C);
