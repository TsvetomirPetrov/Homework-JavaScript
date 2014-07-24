function checkBrackets(input) {
    input = input.toString();
    var leftBracket = input.match(/\(/g);
    var rightBracket = input.match(/\)/g);
    var result;

    if (leftBracket.length !== rightBracket.length) {
        result = "incorrect";
    } else {
        result = "correct";
    }

    if (input.indexOf(")") < input.indexOf("(")) {
        result = "incorrect";
    }
    return result;
}

console.log(checkBrackets('( ( a + b ) / 5 – d )'));
console.log(checkBrackets(') ( a + b ) )'));
console.log(checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'));
