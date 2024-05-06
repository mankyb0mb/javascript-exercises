const palindromes = function (string) {
    var cleanString = (string.replace(/[^\w]/g, "")).toLowerCase();
    let reverseString = "";
    for (let i = 1; i <= cleanString.length; i++) {
        reverseString = reverseString + cleanString.at(-i)
    }
    if (cleanString == reverseString) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
