function convertKWtoHP(value) {
    var hp = value / 0.746;
    return hp.toFixed(2);
}
console.log(convertKWtoHP(75));
console.log(convertKWtoHP(100));
console.log(convertKWtoHP(1000));