export function isEvenOrOdd(num: number): "odd" | "even" {
  return num % 2 === 1 ? "odd" : "even";
}

// Each branch should be covered by at least one test.
export function calculateStudentGrade(
  assignments: number[],
  midtermExam: number,
  finalExam: number
): "A" | "B" | "C" | "D" | "F" {
  const average =
    (assignments.reduce((a, b) => a + b) + midtermExam + finalExam) / 3;
  if (average >= 90) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else if (average >= 60) {
    return "D";
  } else {
    return "F";
  }
}
