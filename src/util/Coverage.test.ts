import { calculateStudentGrade, isEvenOrOdd } from "./Coverage";

describe("testing Coverage functions", () => {
  test("should return odd", () => {
    expect(isEvenOrOdd(1)).toEqual("odd");
  });
  test("should return even", () => {
    expect(isEvenOrOdd(2)).toEqual("even");
  });

  //write test case for each branch in calculateStudentGrade function
  test("should return A", () => {
    expect(calculateStudentGrade([50, 47], 91, 91)).toEqual("A");
  });
  test("should return B", () => {
    expect(calculateStudentGrade([40, 47], 81, 81)).toEqual("B");
  });
  test("should return C", () => {
    expect(calculateStudentGrade([30, 46], 71, 71)).toEqual("C");
  });
  test("should return D", () => {
    expect(calculateStudentGrade([20, 45], 61, 61)).toEqual("D");
  });

  // If we comment below test case:
  // branch coverage will reduce - branch not traversed
  // statement coverage will decrease - statement not covered
  // line coverage will decrease - line not covered

  // test("should return F", () => {
  //   expect(calculateStudentGrade([10, 44], 51, 51)).toEqual("F");
  // });

});
