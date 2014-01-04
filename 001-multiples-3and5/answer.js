var sum = 0;

for (var i = 0; i < 1000; ++i) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}

var answer = sum;
console.log('Project Euler: Problem 1');
console.log('Find the sum of all the multiples of 3 or 5 below 1000.');
console.log('Answer: ' + answer);