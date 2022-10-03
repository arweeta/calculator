const numbers = document.querySelectorAll(".num")
console.log(numbers)

const operator = document.querySelectorAll(".operators")
console.log(operator)

const clear = document.querySelector(".AC")
console.log(clear)

const equal = document.querySelector(".equals")
console.log(equal)

const display = document.querySelector(".display-box")

let num1 = null;
let num2 = null;
// let operator = null;
// let display.innerText = null;

const turnOn = (e) => {
    display.innerText = "0"
}
clear.addEventListener("click", turnOn)

const displayNum = (e) => {
    // display.innerText = numbers;
    numbers.addEventListener("click", displayNum);
}

// function to clear values
// function clearScreen() {
//     document.getElementById("result").value = "";
// }

// // function to display values
// function display(value) {
//     document.getElementById("result").value += value;
// }

// // function evaluates the expression and returns result
// const calculate = (n1, operator, n2) => {
//     const question = document.getElementById("result").value;
//     const operator = ('/');

//     const num1 = 1;
//     const num2 = 2;

//     let result;

//     if (operator === '+') {
//         result = parseFloat(num1) + parseFloat(num2)
//     } else if (operator === '-') {
//         result = parseFloat(num1) - parseFloat(num2)
//     } else if (operator === '*') {
//         result = parseFloat(num1) * parseFloat(num2)
//     } else if (operator === '÷') {
//         result = parseFloat(num1) / parseFloat(num2)
//     }

//     return result
// };
// document.getElementById("result").value = answer;

// console.log(calculate);