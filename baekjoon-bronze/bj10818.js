const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = input[1].split(" ").map(Number);

const max = Math.max(...N);
const min = Math.min(...N);

console.log(`${min} ${max}`);
