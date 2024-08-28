const word = document.getElementById("word");
const button = document.getElementById("button");

button.addEventListener("mouseover", function() {
    word.innerHTML = "Nigeria's call obey";
});














console.log("Welcome to our javascript class")

school = "BUK"
var name = "Yusuf Abduulah Ayomide"
let age = 5
const networth = 1000


console.log("My name is " + name + "I am a student of " + school + "i am  " + age + "years old and my nnetworth is " + networth )

let firstNumber = 50
let secondNumber = 30
let addition = firstNumber + secondNumber;
let subtraction = firstNumber - secondNumber;
let multiplication = firstNumber * secondNumber;
let division = firstNumber / secondNumber;


console.log("The result of our calculation is " + addition + " The subtraction result is " + subtraction  + " The multilpication result is " + multiplication  + "The divisipoon result is  " + division)

let answer = 100 + 50 * 3 / 2
console.log(answer)

function additions(addition,y) {
    return addition + y;
}

console.log(additions(1,2))
console.log(additions(6,10));

if(age < 10 ){
console.log("You are still a baby")
}else
 {
    console.log("You are no more a baby")
}



function validateform() {
    let x = document.forms["myform"]["fname"].value;
    if (x == "") {
        console.log("input must not be empty");

        return false;
    }
    
}