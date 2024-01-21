const sumAll = function(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        if (a < 0 || b < 0) {
            return "ERROR"
        }
        else if (a < b) {
            let sumAB = 0
            for (a ; a <= b ; a++) {
                sumAB += a
            }
            return sumAB
        }
        else if (a > b) {
            let sumBA = 0
            for (b ; b <= a ; b++) {
                sumBA += b
            }
            return sumBA
        }
    }
    else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
