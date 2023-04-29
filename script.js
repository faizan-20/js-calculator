const numberBtn = document.querySelectorAll('#number');
const operationBtn = document.querySelectorAll('#operator'); 
const clearBtn = document.querySelector('#clear');
const equalsBtn = document.querySelector('#equals');
const prevRes = document.querySelector('#prev-res')
const currRes = document.querySelector('#curr-res')

let storedNum = '';
let clickedOperator = '';
let firstNum = '';
let res = '';
currRes.textContent = 0;

numberBtn.forEach((number) => {
    number.addEventListener(('click'), () => {
        storedNum += number.value;
        currRes.textContent = storedNum;
    });
});

operationBtn.forEach((operator) => {
    operator.addEventListener(('click'), () => {
        firstNum = storedNum;

        clickedOperator = operator.textContent;
        prevRes.textContent = storedNum + clickedOperator;
        storedNum = '';
    });
});

equalsBtn.addEventListener(('click'), () => {
    res = operate(parseInt(firstNum), clickedOperator, parseInt(storedNum));
    currRes.textContent = res;
    prevRes.textContent = firstNum + clickedOperator + storedNum;
    storedNum = res;
})

clearBtn.addEventListener(('click'), () => {
    prevRes.textContent = '';
    currRes.textContent = 0;
    storedNum = '';
    firstNum = '';
    res = '';
    clickedOperator = '';
})

let add = (a, b) => a + b;

let subtract = (a, b) => a - b;

let multiply = (a, b) => a * b;

let divide = (a, b) => {
    if(b === 0){
        return "ERR";
    }
    return a/b;
}

let firstNumber, operator, nextNumber;

function operate(firstNumber, operator, nextNumber){
    if(operator === "+"){
        return add(firstNumber, nextNumber);
    }
    if(operator === "-"){
        return subtract(firstNumber, nextNumber);
    }
    if(operator === "*"){
        return multiply(firstNumber, nextNumber);
    }
    if(operator === "/"){
        return divide(firstNumber, nextNumber);
    }
}