var GreatestPrimeFactor

GreatestPrimeFactor = (function () {

  function GreatestPrimeFactor() {}

  GreatestPrimeFactor.findSmallestFactor = function (num) {
    // quotient of previous calcs in prime quotient on largest prime factor on last iteration
    var smallest = num;
    for (var i = 2; i <= Math.sqrt(num); ++i) {
      if (num % i === 0) {
        smallest = i;

        // take the first one, smallest
        break;
      }
    }
    return smallest;
  };

  GreatestPrimeFactor.prototype.calc = function (num) {
    var smallestFactor = GreatestPrimeFactor.findSmallestFactor(num);
    while (num > smallestFactor) {
      num = num / smallestFactor;
      smallestFactor = GreatestPrimeFactor.findSmallestFactor(num);
    }
    return smallestFactor;
  };

  return GreatestPrimeFactor;

})();

module.exports = GreatestPrimeFactor;


// My super-slow, layman solution
//
//  GreatestPrimeFactor.prototype.calc = function (num) {
//    var factors = GreatestPrimeFactor.findFactors(num);
//    var primeFactors = GreatestPrimeFactor.filterPrimes(factors);
//    return primeFactors[primeFactors.length - 1];
//  };
//
//  GreatestPrimeFactor.filterPrimes = function (nums) {
//    var primes = []
//
//    for (var i in nums) {
//      var num = nums[i];
//      if (GreatestPrimeFactor.isPrime(num))
//        primes.push(num);
//    }
//
//    return primes;
//  }
//
//  GreatestPrimeFactor.findFactors = function (num) {
//    var factors = [];
//
//    var upperLimit = Math.ceil(num / 2);
//
//    for (var i = 0; i < upperLimit; ++i) {
//      if (num % i === 0) {
//        factors.push(i);
//      }
//    }
//
//    return factors;
//  }
//
//  GreatestPrimeFactor.isPrime = function (num) {
//
//    if (isNaN(num) || !isFinite(num) || num < 2)
//      return false;
//
//    if (num % 2 === 0)
//      return false;
//
//    var upperLimit = Math.ceil(num / 2);
//
//    for (var i = 3; i < upperLimit; i += 2) {
//      if (num % i === 0)
//        return false;
//    }
//
//    return true;
//  }