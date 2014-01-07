var GreatestPrimeFactor = require('./greatest_prime_factor');

describe("GreatestPrimeFactor", function() {

  it('has answer for 12', function () {
    var gpf = new GreatestPrimeFactor();
    expect(gpf.calc(12)).toEqual(3);
  });

  it('has answer for 15', function () {
    var gpf = new GreatestPrimeFactor();
    expect(gpf.calc(15)).toEqual(5);
  });

  it('has answer for 27', function () {
    var gpf = new GreatestPrimeFactor();
    expect(gpf.calc(27)).toEqual(3);
  });

  it('has answer for 4461', function () {
    var gpf = new GreatestPrimeFactor();
    expect(gpf.calc(4461)).toEqual(1487);
  });

  it('has answer for 13195', function () {
    var gpf = new GreatestPrimeFactor();
    expect(gpf.calc(13195)).toEqual(29);
  });

  it('has answer for 600851475143', function () {
    var gpf = new GreatestPrimeFactor();
    expect(gpf.calc(600851475143)).toEqual(6857);
  });

});
