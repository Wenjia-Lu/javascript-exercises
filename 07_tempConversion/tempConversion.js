const convertToCelsius = function(tmp) {
  let ans = (tmp - 32) * 5 / 9;
  return Math.round(ans*10)/10;
};

const convertToFahrenheit = function(tmp) {
  let ans = (tmp * 9 / 5) + 32;
  return Math.round(ans*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
