const repeatString = function(text, times) {
    if (times < 0) {
        return "ERROR"
    }
    else {
        var repeated = text.repeat(times);
        console.log(repeated)
        return repeated
    }

};

// Do not edit below this line
module.exports = repeatString;


