const convertToCelsius = function(num) {
  num = (num - 32) * 5/9
  num = parseFloat(num.toFixed(1))
  return num;
};

const convertToFahrenheit = function(num) {
  num = (num * 9/5) + 32
  num = parseFloat(num.toFixed(1))
  return num;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
