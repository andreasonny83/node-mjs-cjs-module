const moduleA = () => {
  return `Hello World!`;
};

const moduleB = (input) => {
  return `The output is ${input}`;
};

module.exports = {
  moduleA,
  moduleB,
};
