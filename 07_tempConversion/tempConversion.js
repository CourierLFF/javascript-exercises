const convertToCelsius = function(temp) {
    let returnedTemp = temp;
    returnedTemp = (returnedTemp - 32) * (5/9)
    if(!Number.isInteger(returnedTemp)) {
      returnedTemp = returnedTemp.toFixed(1);
    }
    return Number(returnedTemp)
};

const convertToFahrenheit = function(temp) {
    let returnedTemp = temp;
    returnedTemp = returnedTemp * (9/5) + 32
    if(!Number.isInteger(returnedTemp)) {
      returnedTemp = returnedTemp.toFixed(1);
    }
    return Number(returnedTemp)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
