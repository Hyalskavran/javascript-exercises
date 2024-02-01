const findTheOldest = function(arr) {
    let oldest = []
    const currentYear = new Date().getFullYear()

    arr.forEach(person => {
        let death = 0

        if (Object.keys(person).includes('yearOfDeath')) {
            death = person['yearOfDeath']
        } else {
            death = currentYear
        }

        let yearsLived = death - person['yearOfBirth']
        
        if (oldest.length === 0) {
            oldest.push([person, yearsLived])
        } else {
            if (oldest[0][1] < yearsLived) {
                oldest.pop()
                oldest.push([person, yearsLived])
            }
        }
        }
    );

    return oldest[0][0]
};

// Do not edit below this line
module.exports = findTheOldest;
