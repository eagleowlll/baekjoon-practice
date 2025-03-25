const input = require("fs")
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split("\n");

const [a, b] = input.splice(" ").map(Number);
