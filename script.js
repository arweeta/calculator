// function to clear values
function clearScreen() {
    document.getElementById("result").value = "";
}

// function to display values
function display(value) {
    document.getElementById("result").value += value;
}

// function evaluates the expression and returns result
function calculate() {
    const question = document.getElementById("result").value;
    const answer = eval(question);
    document.getElementById("result").value = answer;
}
console.log(calculate);