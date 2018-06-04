describe("Year", function() {

  var year;

  it("returns true if year is divisible by 400", function() {
    year = new Year(400);
    expect(year.isLeap()).toBe(true);
  })

  it("returns true if year is divisible by 4 but not by 100", function() {
    year = new Year(1996)
    expect(year.isLeap()).toBe(true)
  })

  it("returns false if year is divisible by 100 but not 400", function() {
    year = new Year(1700)
    expect(year.isLeap()).toBe(false)
  })

})
