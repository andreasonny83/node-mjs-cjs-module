import { moduleA, moduleB } from "node-mjs-cjs-module";

const resA = moduleA();
const resB = moduleB("This is MJS");

console.log(resA);
console.log(resB);
