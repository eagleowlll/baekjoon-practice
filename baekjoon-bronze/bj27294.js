const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const [T, S] = input.split(" ").map(Number);

if (12 <= T && T <= 16 && S === 0) {
  console.log("320");
} else {
  console.log("280");
}
