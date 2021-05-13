export type ScalarOperationType = (first: number, second: number) => number;

export type UnaryOperationType = (first: number) => number;

export const pow: ScalarOperationType = (
  first: number,
  second: number
): number => {
  if (second == 0) {
    return 1;
  }
  let result = first;
  for (let i = 1; i < second; i++) {
    result *= first;
  }
  return result;
};

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: ScalarOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: ScalarOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second;

export const fact: UnaryOperationType = (n: number): number => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

export const sqr: UnaryOperationType = (n: number): number => n * n;

export const mathOperators: {
  [key: string]: ScalarOperationType | UnaryOperationType;
} = {
  "^": pow,
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
};

export const mathPriorities: number[] = [1, 2];

const [FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": FIRST,
  "/": FIRST,
  "^": FIRST,
  "+": SECOND,
  "-": SECOND,
};
