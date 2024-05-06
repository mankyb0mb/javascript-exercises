const fibonacci = function(index) {
    let a = 1
    let b = 1
    if (index < 0) return "OOPS";
    else if (index == "" || index == 0) return 0;
    else {
        for (let i = 2; i < index; i++) {
            let prevb = b
            b = a + b
            a = prevb
        }
    }
    return b;
};

console.log(fibonacci(4))
// Do not edit below this line
module.exports = fibonacci;
