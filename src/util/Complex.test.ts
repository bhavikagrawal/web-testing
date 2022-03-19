import { getLuckyDate, getOldestDate } from "./Complex";

describe("testing complex functions", () => {
  it("should return oldest date by getOldestDate function", () => {
    const dates = [
      new Date("2020-01-01"),
      new Date("2020-01-02"),
      new Date("2020-01-03"),
    ];
    const oldest = getOldestDate(dates);
    expect(oldest).toEqual(new Date("2020-01-01"));
  });

  it("should return todays date for getLuckyDate function", () => {
    const dates = [
      new Date("2020-01-01"),
      new Date("2020-01-02"),
      new Date("2020-01-03"),
    ];
    const oldest = getLuckyDate(dates).toISOString().slice(0, 10);
    expect(oldest).toEqual(new Date().toISOString().slice(0, 10));
  });

  it("should return oldest date for getLuckyDate function", () => {
    const today = new Date();
    const dayMinus1 = new Date();
    dayMinus1.setDate(today.getDate() - 1);
    const dayMinus2 = new Date();
    dayMinus2.setDate(today.getDate() - 2);
    const dayMinus3 = new Date();
    dayMinus3.setDate(today.getDate() - 3);
    const dates = [dayMinus1, dayMinus2, dayMinus3];

    const oldest = getLuckyDate(dates).toISOString().slice(0, 10);
    expect(oldest).toEqual(dayMinus3.toISOString().slice(0, 10));
  });
});
