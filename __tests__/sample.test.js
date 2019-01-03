describe("sample test", () => {
  it("works as expected", () => {
    const age = 100;
    expect(1).toEqual(1);
    expect(age).toEqual(100);
  });

  it("hanels a range of ages", () => {
    const age = 200;
    expect(age).toBeGreaterThan(100);
  });

  it("handles a list of dog names", () => {
    const dogs = ["jurgen", "hugo"];
    expect(dogs).toContain("jurgen");
    expect(dogs).toContain("hugo");
  });
});
