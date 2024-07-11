const findTheOldest = function(arr) {
    let ans;
    let age = 0;
    arr.forEach((obj) => {
        let yd = obj.yearOfDeath ? obj.yearOfDeath : 2024;
        if(yd - obj.yearOfBirth > age){
            age = yd - obj.yearOfBirth;
            ans = obj;
        }
    });

    return ans;
};

// Do not edit below this line
module.exports = findTheOldest;
