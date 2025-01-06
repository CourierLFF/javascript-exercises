const palindromes = function (string) {
    let originalString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    originalString = originalString.replace(/\s/g, '');
    let reversedString = originalString.split('').reverse().join('');
    reversedString = reversedString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    reversedString = reversedString.replace(/\s/g, '');
    originalString = originalString.toLowerCase();
    reversedString = reversedString.toLowerCase();

    console.log("OG: " + originalString);
    console.log("Rev: " + reversedString);

    if(reversedString == originalString) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
