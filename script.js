let numbers = document.querySelectorAll(".keys")
let calculation = document.querySelector(".calculation")
let operators = document.querySelectorAll(".execute")
let equal = document.querySelector(".equals")
let AC = document.querySelector(".allClear")

let resultScreen = document.querySelector(".result")

equal.addEventListener("click", evaluate)
AC.addEventListener("click", reset)

var expression = ""
var operandOne = ""
var operandTwo = ""
var operator = ""

numbers.forEach(number=>number.addEventListener("click",()=>{
    if (operator == ""){
        operandOne+=number.textContent;
    }else {
        operandTwo+=number.textContent;
    }
    expression+=number.textContent;
    calculation.textContent = expression
}))

operators.forEach(operation=>operation.addEventListener("click", ()=>{
    operator+=operation.textContent;
    expression+=operation.textContent;
    calculation.textContent = expression;
}))

function evaluate() {
    switch(true){
        case operator == "×":
             resultant = operandOne*operandTwo;
        break
        case operator == "÷":
             resultant = operandOne/operandTwo;
        break
        case operator == "+":
             resultant = Number(operandOne) + Number(operandTwo);
        break
        case operator == "−":
             resultant = operandOne - operandTwo

    }
    resultScreen.textContent = resultant;

}

function reset() {
    operandOne=""
    operandTwo=""
    expression=""
    operator=""
    calculation.textContent = expression;
    resultScreen.textContent=null
    resultant = null
}

