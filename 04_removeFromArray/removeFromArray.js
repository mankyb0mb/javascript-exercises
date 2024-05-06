const removeFromArray = function(srcArray, ...trash) {
    const newArray = []
    for (let i = 0; i < srcArray.length; i++) {
        let pushToNew = 0;
        for (let index = 0; index < trash.length; index++) {
            if (typeof(srcArray[i]) == typeof(trash[index]))
                if (srcArray[i] == trash[index]) {
                    pushToNew++
                    }   
            }
        if (pushToNew == 0) {
            newArray.push(srcArray[i])
            }
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;

const meow = ["arrg", 2, "arrg", 5, 6, 1, "h", "e", "l", "arrg", "l", 1, "o", "1"]

console.log(removeFromArray(meow, 1, "arrg"))