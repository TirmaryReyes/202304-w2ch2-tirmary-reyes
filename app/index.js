import strictEquals from "./modules/index.js";

console.log(`The result of 1 equals 1 is: ${strictEquals(1, 1)}`);
console.log(`The result of NaN equals NaN is: ${strictEquals(NaN, NaN)}`);
console.log(`The result of 0 equals -0 is: ${strictEquals(0, -0)}`);
console.log(`The result of -0 equals 0 is: ${strictEquals(-0, 0)}`);
console.log(`The result of 1 equals "1" is: ${strictEquals(1, "1")}`);
console.log(`The result of true equals false is: ${strictEquals(true, false)}`);
console.log(
  `The result of false equals false is: ${strictEquals(false, false)}`
);
console.log(
  `The result of "water" equals "oil" is: ${strictEquals("water", "oil")}`
);
