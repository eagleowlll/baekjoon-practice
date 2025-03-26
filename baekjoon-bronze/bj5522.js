const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const A = input.split("\n").map(Number);
let result = 0;

for (let i = 0; i < A.length; i++) {
  result += A[i];
}

console.log(result);
