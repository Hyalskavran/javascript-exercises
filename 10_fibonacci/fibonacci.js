const fibonacci = function(num) {
    if (num == 0) {
        return 0
    } else if (num < 0) {
        return "OOPS"
    } else {
        let seq = []

        for (let i = 0 ; i < num ; i++) {
            if (i == 0 || i == 1) {
                seq.push(1)
            } else {
                seq.push(seq[i - 1] + seq[i - 2])
            }
        }

        return seq[num - 1]
    }
};

// Do not edit below this line
module.exports = fibonacci;
