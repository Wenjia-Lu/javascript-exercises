const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let ans = 0;
  arr.forEach((value) => ans += value);
  return ans;
};

const multiply = function(arr) {
  let ans = 1;
  arr.forEach((value) => ans *= value);
  return ans;
};

const power = function(a, exp) {
  return a ** exp;
};

const factorial = function(a) {
	let ans = 1;
  while(a > 1){
    ans *= a--;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
