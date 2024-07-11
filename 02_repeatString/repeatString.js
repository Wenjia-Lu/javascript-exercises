const repeatString = function(s, n) {

    if(n < 0) return "ERROR";

    let ans = "";
    for(; n > 0; n--){
        ans += s;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
