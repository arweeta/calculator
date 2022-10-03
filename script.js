const numbers = document.querySelectorAll(".num")
const operators = document.querySelectorAll(".operators")
const clear = document.querySelector(".AC")
const equal = document.querySelector(".equals")
const display = document.querySelector(".display-box")

//variables
let num1 = "";
let num2 = "";
let operator = "";
let result = "";

//the AC button to display 0
const turnOn = (e) => {
    display.innerText = "0"
}
clear.addEventListener("click", turnOn)

//display number in the display box
const displayNum = (e) => {
    display.innerHTML = num1;
}

//calling the displayNum function
const callNumber = (e) => {
    console.log(e.target.innerHTML)
    num1 += e.target.innerHTML
        // console.log(num1)
    displayNum()
}

//onclick event listener for each number pressed
numbers.forEach((number) => {
    number.addEventListener("click", callNumber)

})

//function for operators
const callOperator = (e) => {
    console.log(e.target.innerHTML)
    operator = e.target.innerHTML
        // console.log(operator);
    displayNum()
}

operators.forEach((operator) => {
    operator.addEventListener("click", callOperator)
})

//switch cases and operators to calculate
const calculate = (n1, operator, n2) => {
    let result

};
document.getElementById("result").value = answer;

console.log(calculate);



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