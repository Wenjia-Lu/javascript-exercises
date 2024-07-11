const reverseString = function(s) {
    let len = s.length;
    let ans = "";
    for(; len >= 0; --len){
        ans += s.charAt(len);
    }

    return ans;
};

// Do not edit below this line
module.exports = reverseString;
