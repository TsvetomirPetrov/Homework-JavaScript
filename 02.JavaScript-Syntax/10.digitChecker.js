function checkDigit(n) {
    var check = Math.floor(n / 100) % 10 == 3;
    console.log(check);
}
checkDigit(1235);
checkDigit(25368);
checkDigit(123456);