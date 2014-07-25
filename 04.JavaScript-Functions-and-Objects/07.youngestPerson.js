function findYoungestPerson(persons) {
    var youngest = Number.MAX_VALUE;
    var person = "";
    for (var i = 0; i < persons.length; i++) {
        var currentAge = persons[i].age;
        if (currentAge < youngest) {
            youngest = currentAge;
            person = persons[i];
        }
    }
    console.log("The youngest person is " + person.firstname + " " + person.lastname);
}

var persons = [
    { firstname : 'George', lastname: 'Kolev', age: 32},
    { firstname : 'Bay', lastname: 'Ivan', age: 81},
    { firstname : 'Baba', lastname: 'Ginka', age: 40}];
findYoungestPerson(persons);