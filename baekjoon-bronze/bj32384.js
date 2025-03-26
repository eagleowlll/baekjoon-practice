const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const N = Number(input);
console.log("LoveisKoreaUniversity ".repeat(N).trim());
