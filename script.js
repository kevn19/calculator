let numbers = document.querySelectorAll(".keys")
let calculation = document.querySelector(".calculation")
let operators = document.querySelectorAll(".execute")
let equal = document.querySelector(".equals")
let AC = document.querySelector(".allClear")
let decimal = document.querySelector(".decimal")
let resultScreen = document.querySelector(".result")
let delet = document.querySelector(".clear")

equal.addEventListener("click", evaluate)
AC.addEventListener("click", reset)
delet.addEventListener("click",del)

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

decimal.addEventListener("click",()=>{
    if (operandOne.includes(".") && operandTwo==""&&operator==""){
        return;
    }else if (operator == "" && operandOne==""){
        operandOne+=decimal.textContent;
        expression+="0"+decimal.textContent;
        calculation.textContent = expression
    }else if (operator==""){
        operandOne+=decimal.textContent;
        expression+=decimal.textContent;
        calculation.textContent = expression
    }
    else if (operandTwo.includes(".")) {
        return;
    }else if (operandTwo=="" && operandOne!=""&&operator!=""){
        operandTwo+=decimal.textContent;
        expression+="0"+decimal.textContent;
        calculation.textContent = expression
    }
    else if (operandTwo != ""){
        operandTwo+=decimal.textContent;
        expression+=decimal.textContent;
        calculation.textContent = expression
    }
    
    
})


operators.forEach(operation=>operation.addEventListener("click", ()=>{
    if(operator!="" && operandTwo != ""){
        evaluate()
        operator+=operation.textContent;
        expression+=operation.textContent;
        calculation.textContent = expression;
    }else if(operator!="" && operandTwo==""){
        return;
    }
    
    else{
        operator+=operation.textContent;
        expression+=operation.textContent;
        calculation.textContent = expression;
    }
}
))

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
    operator=""
    operandOne = resultant
    operandTwo=""
    expression = resultant;

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

function del() {
    expression=expression.slice(0,-1)
    calculation.textContent = expression;
    if(operator==""&&operandTwo==""){
        operandOne=operandOne.slice(0,-1);
    }else if (operator!=""&&operandTwo==""){
        operator="";
    }else if(operandTwo!=""){
        operandTwo=operandTwo.slice(0,-1);
    }
}

delet.addEventListener("click",del)