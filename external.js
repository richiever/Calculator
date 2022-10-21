function add(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}

function divide(num1, num2) {
    return parseInt(num1) / parseInt(num2);
}

function multiply(num1, num2) {
    return parseInt(num1) * parseInt(num2);
}

function operate(oper, num1, num2) {
    if(oper === '+') {
        return add(num1,num2);
    }
    else if(oper === '-') {
        return subtract(num1,num2);
    }
    else if(oper === '/') {
        return divide(num1,num2);
    }
    else if(oper === '*') {
        return multiply(num1,num2);
    }
    else {
        return "This is an invalid input!";
    }
}

let firstNum=0;

let displayNum=0;

let oper='+';

const btn = document.getElementsByClassName('btn');

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');

one.addEventListener('click', function() {
    displayNum = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = displayNum + '1';
    displayNum = document.getElementById('display').innerHTML;
});

two.addEventListener('click', function() {
    displayNum = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = displayNum + '2';
    displayNum = document.getElementById('display').innerHTML;
});

three.addEventListener('click', function() {
    displayNum = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = displayNum + '3';
    displayNum = document.getElementById('display').innerHTML;
});

four.addEventListener('click', function() {
    displayNum = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = displayNum + '4';
    displayNum = document.getElementById('display').innerHTML;
});

five.addEventListener('click', function() {
    displayNum = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = displayNum + '5';
    displayNum = document.getElementById('display').innerHTML;
});

six.addEventListener('click', function() {
    console.log('six');
    displayNum = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = displayNum + '6';
    displayNum = document.getElementById('display').innerHTML;
});

seven.addEventListener('click', function() {
    displayNum = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = displayNum + '7';
    displayNum = document.getElementById('display').innerHTML;
});

eight.addEventListener('click', function() {
    displayNum = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = displayNum + '8';
    displayNum = document.getElementById('display').innerHTML;
});

nine.addEventListener('click', function() {
    displayNum = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = displayNum + '9';
    displayNum = document.getElementById('display').innerHTML;
});

zero.addEventListener('click', function() {
    displayNum = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = displayNum + '0';
    displayNum = document.getElementById('display').innerHTML;
});

const plus = document.getElementById('plus');
const sub = document.getElementById('subtract');
const div = document.getElementById('divide');
const mul = document.getElementById('multiply');
const equals = document.getElementById('equals');

equals.addEventListener('click', function() {
    firstNum = parseInt(firstNum);
    console.log(firstNum);
    displayNum = parseInt(displayNum);
    console.log(displayNum);
    if(firstNum === 0) {
        alert("you can't divide by 0!");
        firstNum=0;
        displayNum = 0;
        oper='+';
    }
    document.getElementById('display').innerHTML = "";
    document.getElementById('display').innerHTML = operate(oper, parseInt(firstNum), parseInt(displayNum));
});

plus.addEventListener('click', function() {
    displayNum = parseInt(displayNum);
    firstNum += displayNum;
    console.log(displayNum);
    displayNum = 0;
    document.getElementById('display').innerHTML = "";
    oper = '+';
    
});

mul.addEventListener('click', function() {
    displayNum = parseInt(displayNum);
    firstNum += displayNum;
    console.log(displayNum);
    displayNum = 0;
    document.getElementById('display').innerHTML = "";
    oper = '*';
    
});

sub.addEventListener('click', function() {
    displayNum = parseInt(displayNum);
    firstNum += displayNum;
    console.log(displayNum);
    displayNum = 0;
    document.getElementById('display').innerHTML = "";
    oper = '-';
    
});

div.addEventListener('click', function() {
    displayNum = parseInt(displayNum);
    firstNum += displayNum;
    console.log(displayNum);
    displayNum = 0;
    document.getElementById('display').innerHTML = "";
    oper = '/';
    
});