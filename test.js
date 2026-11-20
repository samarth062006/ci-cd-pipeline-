console.log("Running tests...");
const sum = 2 + 2;
if (sum !== 4) {
  throw new Error("Math failed!");
}
console.log("All tests passed!");
