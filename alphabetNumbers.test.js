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

  it("handles a whole sentance with punctuation", () => {
    expect(alphabetNumbers("The sunset sets at twelve o' clock.")).toEqual(
      "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
    );
  });
});
