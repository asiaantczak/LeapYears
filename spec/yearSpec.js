describe("Year", function() {

  var year = new Year();

  describe("isLeap", function() {
    it("returns true if a year is divisible by 400", function() {
      expect(year.isLeap(2000)).toBe(true);
    });

    it("returns false if a year is divisible by 100, but not 400", function() {
      expect(year.isLeap(1700)).toBe(false);
    });

    it("returns true if a year is divisible by 4, but not 100", function() {
      expect(year.isLeap(2008)).toBe(true);
    });

    it("returns false if year is not divisible by 4", function() {
      expect(year.isLeap(2017)).toBe(false);
    })
  });
});
