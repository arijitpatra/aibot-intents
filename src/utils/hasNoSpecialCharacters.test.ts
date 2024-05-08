import { hasNoSpecialCharacters } from "./hasNoSpecialCharacters";

describe("Unit test for hasNoSpecialCharacters util fn:", () => {
  test("returns true for all number or characters", () => {
    const value = "Test123";
    expect(hasNoSpecialCharacters(value)).toBe(true);
  });

  test("returns true for all number or characters with space in between", () => {
    const value = "Test 123";
    expect(hasNoSpecialCharacters(value)).toBe(true);
  });

  test("returns false for special character(s)", () => {
    const value = "#$%!*";
    expect(hasNoSpecialCharacters(value)).toBe(false);
  });
});
