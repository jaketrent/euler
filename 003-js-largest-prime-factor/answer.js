var largestPrimeFactor = null;

function isPrime(num) {
  if (isNaN(num) || !isFinite(num) || num < 2)
    return false;

  if (num % 2 === 0)
    return false;

  // start at 3 and only test odds
  for (var i = 3; i < num; i += 2) {

    // not prime if has other factors beyond 1 and num
    if (num % i)
      return false;
  }

  return true;
}

function isFactor(factor, num) {
  return num % factor === 0;
}

// start high, first to match is largest
// down by 2 to just hit odds
function findLargestPrimeFactor(theNum) {
  for (var i = theNum; i > 2; i -= 2) {
    if (isFactor(i, theNum) && isPrime(i))
      return i;
  }
}

var answer = findLargestPrimeFactor(600851475143);
console.log('Project Euler: Problem 3');
console.log('What is the largest prime factor of the number 600851475143 ?');
console.log('Answer: ' + answer);