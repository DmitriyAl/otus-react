import { isNumber, handleNumber } from "./helpers";

describe("isNumber tests", () => {
  it("2 + 2", () => {
    expect(isNumber("2 + 2")).toEqual(false);
  });

  it("2", () => {
    expect(isNumber("2")).toEqual(true);
  });

  it("(2 + 2)", () => {
    expect(isNumber("(2 + 2)")).toEqual(false);
  });

  it("2!", () => {
    expect(isNumber("2!")).toEqual(true);
  });

  it("2**", () => {
    expect(isNumber("2**")).toEqual(true);
  });

  it("undefined", () => {
    expect(isNumber(undefined)).toEqual(false);
  });
});

describe("handleNumber tests", () => {
  it("3!", () => {
    expect(handleNumber("3!")).toEqual(6);
  });

  it("3**", () => {
    expect(handleNumber("3**")).toEqual(9);
  });
});
