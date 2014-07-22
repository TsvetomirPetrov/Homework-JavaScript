function variablesTypes(input) {
    var name = input[0];
    var age = input[1];
    var gender = input[2];
    var foods = input[3];
    
    console.log('"My name: %s //type is %s\n' +
        'My age: %d //type is %s\n' +
        'I am male: %s //type is %s\n' +
        'My favorite foods are: %s,%s,%s //type is %s"',
    name, typeof (name), age, typeof (age), gender, typeof (gender), foods[0], foods[1], foods[2], typeof (foods));
}
variablesTypes(['Pesho', 22, true, ['fries', 'banana', 'cake']]);