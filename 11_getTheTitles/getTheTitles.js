const getTheTitles = function(objArr) {
    arr = []

    objArr.forEach(obj => {
        for ([k, v] of Object.entries(obj)) {
            if (k == 'title') {
                arr.push(v)
            }
        }
    });

    return arr
};

// Do not edit below this line
module.exports = getTheTitles;
