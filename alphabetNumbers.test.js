const alphabetNumbers = require("./alphabetNumbers");

describe("alphabetNumbers", () => {
  it('returns 1 for "a"', () => {
    expect(alphabetNumbers("a")).toEqual("1");
  });

  it('returns "1 2" for an input of "ab"', () => {
    expect(alphabetNumbers("ab")).toEqual("1 2");
  });

  it('returns "2 1 26" for and input of "baz"', () => {
    expect(alphabetNumbers("baz")).toEqual("2 1 26");
  });

  it("ignores non-letters", () => {
    expect(alphabetNumbers("h!.,1234567890:;`~@#${%^&*()}|[]/i")).toEqual(
      "8 9"
    );
  });
});
