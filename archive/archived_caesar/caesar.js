const alphbet = "abcdefghijklmnopqrstuvwxyz"
const upperbet = alphbet.toUpperCase()

const caesar = function(rawText, direction) {
    let encrypted = ""
    for (let i = 0; i < rawText.length; i++) {
        let newText = rawText[i]
        if (alphbet.includes(rawText[i])) {
            newIndex = alphbet.indexOf(rawText[i]) + direction;
            if (newIndex > 25 || newIndex < -25) {
                newIndex = newIndex % 26
            }
            newText = alphbet.at(newIndex)
        }
        else if (upperbet.includes(rawText[i])) {
            newIndex = upperbet.indexOf(rawText[i]) + direction;
            if (newIndex > 25 || newIndex < -25) {
                newIndex = newIndex % 26
            }
            newText = upperbet.at(newIndex)
        }
        encrypted = encrypted + newText
    }
    return encrypted;
};

// Do not edit below this line
module.exports = caesar;
