const sum = (...numbers: number[]) =>
  numbers.reduce((acc, cur) => acc + cur, 0);

describe("테스트 제목", () => {
  test("테스트 내용", () => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });
});
