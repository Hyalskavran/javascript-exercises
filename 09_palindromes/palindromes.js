const palindromes = function (args) {
    // return [...args].filter(arg => args.charCodeAt(args.indexOf(arg)) > 64 )

    let arrToCheck = [...args]
        .filter(arg => /^[a-zA-Z0-9]+$/.test(arg))
        .map(arg => arg.toLowerCase())

    let arrReversed = arrToCheck.toReversed()

    for (let i = 0 ; i < arrToCheck.length ; i++) {
        if (arrToCheck[i] !== arrReversed[i]) {
            return false
        }
    }

    return true
};

// Do not edit below this line
module.exports = palindromes;
