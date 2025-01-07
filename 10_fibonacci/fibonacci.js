const fibonacci = function(num) {
    let current_value = 1;
    let previous_value = 0;

    if (Number(num) == 0) {
        return 0;
    }

    if (Number(num) < 0) {
        return "OOPS"
    }

    for(let i = 0; i < Number(num) - 1; i++) {
        let current_value_held = current_value
        current_value += previous_value;
        previous_value = current_value_held;
    }
    return current_value;
};

// Do not edit below this line
module.exports = fibonacci;
