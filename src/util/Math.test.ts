import { sum } from "./Math";

describe("testing Math functions", () => {
  test("shold check sum function", () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
