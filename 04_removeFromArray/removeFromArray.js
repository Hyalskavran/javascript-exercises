const removeFromArray = function(arr, ...valuesToRemove) {
    // Convert single value to an array
    if (!Array.isArray(valuesToRemove)) {
        valuesToRemove = [valuesToRemove];
    }

    // Create a new array by filtering out the values to be removed
    let newArray = arr.filter(item => !valuesToRemove.includes(item));

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
