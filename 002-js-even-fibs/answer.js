var upperLimit = 4000000;
var sum = 0;
var tempFirst = null;
var first = 1;
var second = 2;

while (second < upperLimit) {

  // can check only second to start because 1 is odd and all future fibs will flow thru this var
  if (second % 2 === 0)
    sum += second;

  // save ref to first before sliding fib refs down
  tempFirst = first;
  first = second;
  second = tempFirst + second;
}

var answer = sum;
console.log('Project Euler: Problem 2');
console.log('By considering the terms in the Fibonacci sequence whose values ' +
            'do not exceed four million, find the sum of the even-valued terms.');
console.log('Answer: ' + answer);