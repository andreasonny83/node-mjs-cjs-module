const { moduleA, moduleB } = require("node-mjs-cjs-module");

const resA = moduleA();
const resB = moduleB("This is CommonJS");

console.log(resA);
console.log(resB);
