const palindromes = function (s) {
    s = s.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
    return s == s.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
