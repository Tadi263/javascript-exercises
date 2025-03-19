const findTheOldest = function(people) {
    return people.sort((a, b) => {let lastGuyDeath = a.yearOfDeath || new Date().getFullYear();
        let nextGuyDeath = b.yearOfDeath || new Date().getFullYear();
              let lastGuy = lastGuyDeath - a.yearOfBirth
                                    let nextGuy = nextGuyDeath - b.yearOfBirth
        return lastGuy > nextGuy ? 1 : -1;}).reduce((accumulator, employee) => {
accumulator = employee;
return accumulator;},
{})
};

// Do not edit below this line
module.exports = findTheOldest;
