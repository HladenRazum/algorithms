import Calculator from "./calculator";

test("calculator raising a base to power", () => {
   expect(Calculator.raise(1, 2)).toBe(1);
   expect(Calculator.raise(2, 2)).toBe(4);
   expect(Calculator.raise(3, 1)).toBe(3);
   expect(Calculator.raise(121, 0)).toBe(1);
   expect(Calculator.raise(121, -2)).toBe("invalid input");
});
