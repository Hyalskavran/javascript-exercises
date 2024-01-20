const repeatString = function(word, times) {
    if (parseInt(times) < 0) {
        return "ERROR"
    } else {
        let repeatedWord = []

    for (let i = 0; i < parseInt(times); i++) {
        repeatedWord.push(word)
    }

    return repeatedWord.join("")
    }
};

// Do not edit below this line
module.exports = repeatString;
