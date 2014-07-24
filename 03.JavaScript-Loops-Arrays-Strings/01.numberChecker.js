function printNumbers(n) {
    var result = [];
    for (var i = 1; i < n; i++){
        if ((i % 4 === 0) || (i % 5 === 0)){
            continue;
        }else{
            result.push(i);
        }
    }
    result.join(",");
    if(n <= 0){
        console.log("no");
    }else{
        console.log(result);
    }
}

printNumbers(20);
printNumbers(-5);
printNumbers(13);