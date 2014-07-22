function isPrime(value) {
    var divider = true;
    for (var i = 2; i < value;i++){
        if (value % i == 0){
            divider = false;
        }
    }
    console.log(divider);
}
isPrime(7);
isPrime(254);
isPrime(587);