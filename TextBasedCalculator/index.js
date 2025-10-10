const prompt = require("prompt-sync")();

function getNumber(numberString) {
    while (true) {
        const number = parseFloat(prompt("Enter Number" + numberString + ": "))
        if (isNaN(number)) {
            console.log("Invalid input")
        } else {
            return number
        }
    }
}

const number1 = getNumber("One")
const number2 = getNumber("Two")

/*let number1;
let number2;
while (true) {
    number1 = parseFloat(prompt("Enter Number 1: "))
    if (isNaN(number1)) {
        console.log("Invalid input")
    } else {
        break
    }
}

while (true) {
    number2 = parseFloat(prompt("Enter Number 2: "))
    if (isNaN(number2)) {
        console.log("Invalid input")
    } else {
        break
    }
}*/

const operator = prompt("Enter Sign: ")

let result;
let valid = true;

switch(operator) {
    case "+":
        result = number1 + number2
        break;
    case "-":
        result = number1 - number2
        break;
    case "/":
        if (number2 === 0) {
            valid = false
            console.log("Zero division error.")
        }
        result = number1 / number2
        break;
    case "*":
        result = number1 * number2
        break;
    default:
        console.log("Invalid")
        valid = false;
        break;
}

if(valid) console.log(number1 , operator, number2, "=", result)
