let num1 = '';
let num2 = '';
let opr = '';
let opr2 = '';

const display = document.querySelector('#display');
display.textContent = ' ';

const number = document.querySelectorAll('.number');
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', () => {
        num1 += number[i].textContent;
        display.textContent = num1;
    })
}

const sum = document.querySelectorAll('.operator');
for (let o = 0; o < sum.length; o++) {
    sum[o].addEventListener('click', () => {
        if (num2 === '' && num1 !== '') {
            enable();
            opr = sum[o].textContent;
            sum[o].classList.add('pushed')
            opr2 = opr;
            num2 = num1
            num1 = '';
            display.textContent = num2;
        }
        else if (num1 === '' && num2 !== '') opr = sum[o].textContent;
        else {
            operator(opr);
            enable();
            opr2 = opr;
            opr = sum[o].textContent;
            display.textContent = num2;
            sum[o].classList.add('pushed')
            num1 = '';
        }
        console.log(num1);
        console.log(num2);
        console.log(opr);
        console.log(opr2);
    })
};

const result = document.querySelector('.result');
result.addEventListener('click', () => {
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
});

const backspace = document.querySelector('#delete');
backspace.addEventListener('click', () => {
    num1 = num1.slice(0, -1);
    display.textContent = num1;
})

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    opr = '';
    opr2 = '';
    num1 = '';
    num2 = '';
    display.textContent = ' '
})

const dot = document.querySelector('#dot');
dot.addEventListener('click', point)

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