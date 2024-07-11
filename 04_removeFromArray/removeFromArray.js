const removeFromArray = function(arr, ...args) {
    let ans = [];
    arr.forEach((value) => {
        if(!args.includes(value)) ans.push(value);
    });
    return ans;
};

// Do not edit below this line
module.exports = removeFromArray;
