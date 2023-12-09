let num1 = '';
let num2 = '';
let opr = '';
let opr2 = '';

const display = document.querySelector('#display');
const upDisplay = document.querySelector('#updisplay');
display.textContent = '';
upDisplay.textContent = '';
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
        // operator(sum[o].textContent);
        if (num2 === '') {
            opr = sum[o].textContent;
            upDisplay.textContent = num1 + ` ${opr}`;
            opr2 = opr;
            num2 = num1
            num1 = '';
            display.textContent = num1;
        }
        else {
            operator(opr);
            opr2 = opr;
            opr = sum[o].textContent;
            upDisplay.textContent = num2 + ` ${opr}`;
            num1 = '';
        }
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
    upDisplay.textContent = num2 + ' ' + opr + " " + num1 + ' ' + '=' + ' ' + sum;
    opr = '';
    opr2 = '';
    num1 = '';
    num2 = '';
    sum = 0;
    display.textContent = '';
})

function operator(opr) {
    if (opr === '+') {
        let sum = parseFloat(num1) + parseFloat(num2);
        num1 = '';
        num2 = sum;
        return num1, num2;
    }
    else if (opr === '-') {
        let sum = parseFloat(num2) - parseFloat(num1);
        num1 = '';
        num2 = sum;
        return num1, num2;
    }
    else if (opr === '*') {
        let sum = parseFloat(num2) * parseFloat(num1);
        num1 = '';
        num2 = sum;
        return num1, num2;
    }
    else if (opr === '/') {
        let sum = parseFloat(num2) / parseFloat(num1);
        num1 = '';
        num2 = sum;
        return num1, num2;
    }
}