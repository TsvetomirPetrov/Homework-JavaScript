function findMostFreqWord(value) {
    var words = value.match(/\b\w+\b/g);
    var hashTable = [];
    var word;
    var maxTimes = 0;

    for (var i in words) {
        word = words[i].toLowerCase();
        if (hashTable[word] === undefined) {
            hashTable[word] = { word: word, times: 1 };
        } else {
            hashTable[word].times++;
        }

        if (hashTable[word].times > maxTimes) {
            maxTimes = hashTable[word].times;
        }
    }
    var bestWords = [];

    for(var j in hashTable) {
        if (hashTable[j].times === maxTimes) {
            bestWords.push(hashTable[j]);
        }
    }
    bestWords.sort(
        function (lhs, rhs) {
            return lhs.word.localeCompare(rhs.word);
        }
    );

    for (var k in bestWords) {
        console.log(bestWords[k].word + " -> " + bestWords[k].times + " times");
    }
}

findMostFreqWord('in the middle of the night');
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome,' +
    ' welcome darling.');