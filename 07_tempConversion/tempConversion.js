const convertToCelsius = function(temp) {
  calcTemp = (temp - 32) * 5/9
  if (Number.isInteger(calcTemp)) {
    return calcTemp
  } else {
    return Math.round(calcTemp * 10) / 10
  }
};

const convertToFahrenheit = function(temp) {
  calcTemp = (temp * 9/5) + 32
  if (Number.isInteger(calcTemp)) {
    return calcTemp
  } else {
    return Math.round(calcTemp * 10) / 10
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
