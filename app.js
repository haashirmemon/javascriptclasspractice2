// var uservalue = +prompt("enter your value")
// if (uservalue > 10) {
//     document.write(uservalue)
// } else{
//     document.write('garaq ho')
// }
var guess = prompt('enter bond number')
// guess = Number(guess)
// var secretnumber = 15
// var lowprize = {min:6 ,max:14, }
var lownumber = 14
var highnumber = 100
var mediumnumber = 50
if (guess<=14) {
    document.write('cogragulation you won lowprize')
}else if (guess<=50) {
    document.write('cogragulation you midium prize')
} else if(guess<=100) {
    document.write('cogragulation you high prize')
} else {
    document.write('garaq hoja')
}

