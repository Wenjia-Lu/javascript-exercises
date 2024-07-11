const sumAll = function(a, b) {
    // if(typeof(a) != typeof(1) || typeof(b) != typeof(1)) return "ERROR";
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";

    if(a < 0 || b < 0) return "ERROR";

    let ans = 0;
    if (a > b) [a, b] = [b, a];
    while(a <= b){
        ans += a++;
    }
    
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
