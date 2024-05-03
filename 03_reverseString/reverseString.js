const reverseString = function(rawString) {
    let newString = ""
    // Iterates through each character of the string backwards
    for (let i = 1; i <= rawString.length; i++) {   
        // Each iteration adds itself to the string (eg: "backwards" -> "s" + "d" = "sd" + "r" = "sdr"...."sdrawkcab") 
        newString = newString + rawString.at(-(i))
    }
    return newString
};

// Do not edit below this line
module.exports = reverseString;