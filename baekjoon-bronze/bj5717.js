const input = require("fs").readFileSync("test.txt").trim().split("\n");

for (let line of input) {
  const [a, b] = line.split(" ").map(Number);
  if (a === 0 && b === 0) break;

  console.log(a + b);
}
console.log(parseInt("2"));
