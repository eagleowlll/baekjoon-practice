const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const [N, M] = input.split(" ").map(Number);

if (N * 100 >= M) {
  console.log("Yes");
} else {
  console.log("No");
}
