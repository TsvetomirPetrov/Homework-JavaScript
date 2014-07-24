function findPalindromes(inputString) {
    var palindromes = [];
    var inputs = inputString.split(/[^a-zA-z]+/);

    for (var i = 0; i < inputs.length - 1; i += 1) {
        var word = inputs[i];
        var reversedWord = '';

        for (var j = word.length - 1; j >=0 ; j -= 1 ) {
            reversedWord += word[j];
        }

        if (reversedWord.toLowerCase() === word.toLowerCase()) {
            palindromes.push(word.toLowerCase());
        }
    }

    var outputs = palindromes.join(', ');

    return outputs;
}
console.log(findPalindromes('There is a man, his name was Bob.'));