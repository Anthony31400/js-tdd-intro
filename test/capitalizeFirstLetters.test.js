const assert = require("assert");
const capitalizeFirstLetters = require("../capitalizeFirstLetters");

describe("capitalizeFirstLetters", () => {
  it("Is a function accepting one argument", () => {
    assert.strictEqual(typeof capitalizeFirstLetters, "function");
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });
  it("Transform i am learning TDD correctly", () => {
    assert.strictEqual(
      capitalizeFirstLetters("i am learning TDD"),
      "I Am Learning TDD"
    );
  });
  it("Transform one word correctly", () => {
    assert.strictEqual(capitalizeFirstLetters("hello"), "Hello");
  });
  it("Transform one letter suit correctly", () => {
    assert.strictEqual(capitalizeFirstLetters("z y x"), "Z Y X");
  });
  it("Work witg an empty string", () => {
    assert.strictEqual(capitalizeFirstLetters(""), "");
  });
});
