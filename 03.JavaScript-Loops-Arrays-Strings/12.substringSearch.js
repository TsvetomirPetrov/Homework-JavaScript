function countSubstringOccur(inputArray) {
    var subString = inputArray[0].toLowerCase();
    var text = inputArray[1].toLowerCase();
    var counter = 0;

    for (var i = 0; i < text.length - subString.length; i += 1) {
        for (var j = 0; j < subString.length; j += 1) {
            if (subString[j] !== text[i + j]) {
                break;
            }
            if (j === subString.length - 1 && subString[j] === text[i + j]) {
                counter++;
            }
        }
    }
    return counter;
}

console.log(countSubstringOccur(["in", "We are living in a yellow submarine. We don't have anything else." +
    " Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days."]));
console.log(countSubstringOccur(["your", "No one heard a single word you said. They should have seen it in your eyes." +
    " What was going around your head."]));
console.log(countSubstringOccur(["but", "But you were living in another world tryin' to get your message through."]));