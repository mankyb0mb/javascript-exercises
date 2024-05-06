const sumAll = function(x, y) {
    var sum = "ERROR"
    if ((typeof(x) != "number") || (typeof(y) != "number"))  {
        return sum;
    }
    else if ((x < 0) || (y < 0)) {
        return sum;
    }
    else {
        if (x < y) {
            var start = x;
            var end = y;
        }
        else {
            var start = y;
            var end = x;
        }
        // example start = 4, end = 7; 4 + 5 + 6 + 7
        sum = 0;
        for (let adder = start; adder <= end; adder++) {
            sum = sum + adder;
        }
    }
    return sum;
};

console.log(sumAll(0,5))

// Do not edit below this line
module.exports = sumAll;
