import {
  isBracketsExist,
  getExpression,
  replaceByResult,
  isValid,
} from "./bracketsParser";

describe("isValid tests", () => {
  it("2 + 2", () => {
    expect(isValid("2 + 2")).toEqual(true);
  });

  it("(2 + 2", () => {
    expect(isValid("(2 + 2")).toEqual(false);
  });

  it("2 + 2)", () => {
    expect(isValid("2 + 2)")).toEqual(false);
  });

  it("(2 + 2)", () => {
    expect(isValid("(2 + 2)")).toEqual(true);
  });
});

describe("isBracketsExist tests", () => {
  it("2 + 2", () => {
    expect(isBracketsExist("2 + 2")).toEqual(false);
  });

  it("(2 + 2", () => {
    expect(isBracketsExist("(2 + 2")).toEqual(true);
  });

  it("2 + 2)", () => {
    expect(isBracketsExist("2 + 2)")).toEqual(true);
  });

  it("(2 + 2)", () => {
    expect(isBracketsExist("(2 + 2)")).toEqual(true);
  });
});

describe("getExpression tests", () => {
  it("2 + 2", () => {
    expect(getExpression("2 + 2")).toEqual("2 + 2");
  });

  it("(2 + 2)", () => {
    expect(getExpression("(2 + 2)")).toEqual("2 + 2");
  });

  it("(2 + 2) * 2", () => {
    expect(getExpression("(2 + 2) * 2")).toEqual("2 + 2");
  });

  it("((2 + 2) - 1) * 2", () => {
    expect(getExpression("((2 + 2) - 1) * 2")).toEqual("2 + 2");
  });

  it("3 + ((2 + 2) - 1) * 2", () => {
    expect(getExpression("3 + ((2 + 2) - 1) * 2")).toEqual("2 + 2");
  });
});

describe("replaceByResult tests", () => {
  it("2 + 2", () => {
    expect(replaceByResult("2 + 2", 4)).toEqual("4");
  });

  it("(2 + 2)", () => {
    expect(replaceByResult("(2 + 2)", 4)).toEqual("4");
  });

  it("(2 + 2) * 2", () => {
    expect(replaceByResult("(2 + 2) * 2", 4)).toEqual("4 * 2");
  });

  it("((2 + 2) - 1) * 2", () => {
    expect(replaceByResult("((2 + 2) - 1) * 2", 4)).toEqual("(4 - 1) * 2");
  });

  it("3 + ((2 + 2) - 1) * 2", () => {
    expect(replaceByResult("3 + ((2 + 2) - 1) * 2", 4)).toEqual(
      "3 + (4 - 1) * 2"
    );
  });
});
