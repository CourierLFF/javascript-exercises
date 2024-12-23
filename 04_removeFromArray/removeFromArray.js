const removeFromArray = function(array, ...removedItems) {
    removedArray = array
    for(let i = 0; i < removedItems.length; i++) {
        while(removedArray.indexOf(removedItems[i]) != -1) {
            removedArray.splice(removedArray.indexOf(removedItems[i]), 1);
        }  
    }
    return removedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
