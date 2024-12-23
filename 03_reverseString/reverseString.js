const reverseString = function(string) {
    let splitString = string.split("")
    let reversedLetters = splitString.reverse()
    return reversedLetters.join("")
};

// Do not edit below this line
module.exports = reverseString;
