const fibonacci = function(n) {
    if (n < 0) return "OOPS";

    if (n == 0) return 0;

    let a = 1, b = 1;
    while(n > 2){
        a += b;
        b += a;
        n -= 2;
    }
    if (n % 2 == 0){
        return b;
    } else {
        return a;
    }
};

// Do not edit below this line
module.exports = fibonacci;
