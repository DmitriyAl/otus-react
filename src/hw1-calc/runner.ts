import { parser } from "./parser";
import {
  isBracketsExist,
  getExpression,
  replaceByResult,
  isValid,
} from "./bracketsParser";

import { firstPrioritiesCalc, secondPrioritiesCalc } from "./engine";

export const runner = (line: string): number => {
  if (!isValid(line)) {
    throw new TypeError("Unexpected string");
  }
  do {
    const expression = getExpression(line);
    const stack = parser(expression);

    if (stack === null) {
      throw new TypeError("Unexpected string");
    }

    const firstPrioritiesRes = firstPrioritiesCalc(stack);

    let result;
    if (firstPrioritiesRes.length === 1) {
      result = Number(firstPrioritiesRes[0]);
    } else {
      result = secondPrioritiesCalc(firstPrioritiesRes);
    }
    line = replaceByResult(line, result);
  } while (isBracketsExist(line) || isNaN(Number(line)));
  return Number(line);
};
