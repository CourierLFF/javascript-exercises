const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(sumArray) {
  if(sumArray.length === 0) {
    return 0;
  }
  else {
    return sumArray.reduce((total, currentItem) => {
      return total + currentItem;
    });
  }
};

const multiply = function(numArray) {
  if(numArray.length === 0) {
    return 0;
  }
  else {
    return numArray.reduce((total, currentItem) => {
      return total * currentItem;
    });
  }
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  let finished_product = 1;
	for(let i = 1; i < num + 1; i++) {
    finished_product *= i
  } 
  return finished_product;
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
