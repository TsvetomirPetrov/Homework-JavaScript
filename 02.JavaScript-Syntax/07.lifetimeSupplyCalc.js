function calcSupply(currentAge, maxAge, foodAmount) {
    var avrgKg = ((maxAge - currentAge)* 365) * foodAmount;
    console.log(avrgKg + "kg of chocolate would be enough until I am 118 years old.");
}
calcSupply(38, 118, 0.5);
calcSupply(20, 87, 2);
calcSupply(16, 102, 1.1);
