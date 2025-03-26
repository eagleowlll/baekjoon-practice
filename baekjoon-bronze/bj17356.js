const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const [A, B] = input.split(" ").map(Number);

const p = 1 / (1 + Math.pow(10, (B - A) / 400));

console.log(p);
