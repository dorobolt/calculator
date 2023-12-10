let num1 = '';
let num2 = '';
let opr = '';
let opr2 = '';

const display = document.querySelector('#display');
display.textContent = ' ';

const number = document.querySelectorAll('.number');
number.forEach((numbers) =>
    numbers.addEventListener('click', function () { inputNumber(numbers.textContent); }))

const sum = document.querySelectorAll('.operator');
sum.forEach((operate) =>
    operate.addEventListener('click', function () {
        enable();
        inputOperator(operate.textContent);
        operate.classList.add('pushed');
    }))

const result = document.querySelector('.result');
result.addEventListener('click', inputResult);

const backspace = document.querySelector('#delete');
backspace.addEventListener('click', inputDelete)

const clear = document.querySelector('#clear');
clear.addEventListener('click', inputClear)

const dot = document.querySelector('#dot');
dot.addEventListener('click', point)

function inputNumber(i) {
    console.log(i);
    num1 += i;
    display.textContent = num1;
}

function inputOperator(i) {
    if (num2 === '' && num1 !== '') {
        opr = i;
        opr2 = opr;
        num2 = num1
        num1 = '';
        display.textContent = num2;
    }
    else if (num1 === '' && num2 !== '') {
        opr = i;
        enable();
    }
    else {
        operator(opr);
        opr2 = opr;
        opr = i;
        display.textContent = num2;
        num1 = '';
    }
}

function operator(opr) {
    let sum
    if (opr === '+') {
        sum = parseFloat(num1) + parseFloat(num2);
    }
    else if (opr === '-') {
        sum = parseFloat(num2) - parseFloat(num1);
    }
    else if (opr === '*') {
        sum = parseFloat(num2) * parseFloat(num1);
    }
    else if (opr === '/') {
        if (num1 === '0') return num2 = 'ERROR';
        sum = parseFloat(num2) / parseFloat(num1);
        let roundSum = sum.toFixed(5);
        sum = Number(roundSum);
    }
    num1 = '';
    num2 = sum;
    return num1, num2;
}

function inputResult() {
    const result = {
        '+': function (x, y) { return x + y },
        '-': function (x, y) { return x - y },
        '*': function (x, y) { return x * y },
        '/': function (x, y) { return x / y },

    };
    let sum = result[opr](parseFloat(num2), parseFloat(num1));
    let roundSum = sum.toFixed(5);
    sum = Number(roundSum);
    if (num1 === '0' && opr === '/') sum = 'ERROR';
    if (num1 === '') sum = num2;
    display.textContent = sum;
    opr = '';
    opr2 = '';
    num1 = sum;
    num2 = '';
    enable();
}

function inputDelete() {
    num1 = num1.slice(0, -1);
    display.textContent = num1;
}
function inputClear() {
    opr = '';
    opr2 = '';
    num1 = '';
    num2 = '';
    display.textContent = ' '
    enable();
}

function point() {
    if (num1.indexOf('.') == -1) {
        num1 += '.'
        display.textContent = num1;
        return num1;
    }
    else {
        return;
    }
}

function enable() {
    for (let e = 0; e < sum.length; e++) {
        sum[e].classList.remove('pushed')
    }
}

window.addEventListener('keydown', function (e) {
    console.log(e.keyCode);
    if (e.key >= 0 && e.key <= 9) {
        inputNumber(e.key);
    }
    else if (e.key === '+' || e.key === '-' || e.key === '*' || e.keyCode === 111 || e.keyCode === 191) {
        inputOperator(e.key);
    }
    else if (e.key === '=' || e.key === 'Enter') {
        inputResult();
    }
    else if (e.key === '.') {
        point();
    }
    else if (e.key === 'Backspace') {
        inputDelete();
    }
    else if (e.key === 'Escape') {
        inputClear()
    }
}
)