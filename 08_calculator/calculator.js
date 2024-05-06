const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	var output = 0;
  for (let i = 0; i < array.length; i++) {
    output = output + array[i]
  }
  return output;
};

const multiply = function(multi) {
  var sum = 1;
  for (let i = 0; i < multi.length; i++) {
    sum = sum * multi[i]
  }
  return sum;
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(fact) {
  var output = 1;
  for (let i = 1; i <= fact; i++) {
    output = output * i
  }
  return output;
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
