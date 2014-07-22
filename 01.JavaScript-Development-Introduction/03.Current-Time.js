var cTime = new Date();
var hours = cTime.getHours();
var min = cTime.getMinutes();

if (min > 10) {
    console.log(hours + ":" + min);
}
else{
    console.log(hours + ":" + "0" + min);
}