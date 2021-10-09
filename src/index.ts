import { HELLO, OUTPUT, WORLD } from "./core/constants.js";

export const moduleA = (): string => {
  return `${HELLO} ${WORLD}!`;
};

export const moduleB = (input: string): string => {
  return `${OUTPUT}: ${input}`;
};
