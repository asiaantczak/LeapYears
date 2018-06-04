function Year(year) {
  this.year = year;
}

Year.prototype.isLeap = function() {
  return this._isDivisible(400) || (this._isDivisible(4) && !this._isDivisible(100));
}

Year.prototype._isDivisible = function(num) {
  return this.year % num === 0;
}
