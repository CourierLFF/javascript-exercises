const sumAll = function(startNum, endNum) {
    let result = 0;
    
    if(startNum < 0 || endNum < 0) {
        return "ERROR"
    }

    if(!Number.isInteger(startNum) || !Number.isInteger(endNum)) {
        return "ERROR"
    } 

    if(startNum < endNum) {
        for(let i = startNum; i < endNum + 1; i++) {
            result += i;
        }
    }
    else {
        for(let i = endNum; i < startNum + 1; i++) {
            result += i;
        }
    }
    return result; 
};

// Do not edit below this line
module.exports = sumAll;
