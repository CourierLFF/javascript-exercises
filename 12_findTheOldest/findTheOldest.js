const findTheOldest = function(people) {
    let currentBiggestPerson;
    let currentBiggestNumber = 0;
    for(let i = 0; i < people.length; i++) {
        if(people[i].yearOfDeath == undefined) {
            people[i].yearOfDeath = 2025;
        }
        if(people[i].yearOfDeath - people[i].yearOfBirth > currentBiggestNumber) {
            currentBiggestPerson = people[i];
            currentBiggestNumber = people[i].yearOfDeath - people[i].yearOfBirth;
        }
    }
    return currentBiggestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
