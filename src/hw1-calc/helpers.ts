import { fact, sqr } from "./mathOperators";

export const isNumber = (item: any): boolean => {
  if (item == undefined) {
    return false;
  }
  if (item.endsWith("!") || item.endsWith("**")) {
    return true;
  }
  return !isNaN(Number(item));
};

export const handleNumber = (item: string): number => {
  if (item.endsWith("!")) {
    return fact(Number(item.slice(0, item.length - 1)));
  } else if (item.endsWith("**")) {
    return sqr(Number(item.slice(0, item.length - 2)));
  }
  return Number(item);
};
