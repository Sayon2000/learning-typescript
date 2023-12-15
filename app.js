"use strict";
const num1Element = document.getElementById('num1');
const num2ELemenet = document.getElementById('num2');
const button = document.querySelector('button');
const numResult = [];
const textResult = [];
button.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2ELemenet.value;
    const result = sum(+num1, +num2);
    const stringResult = sum(num1, num2);
    console.log(result);
    console.log(stringResult);
    numResult.push(result);
    textResult.push(stringResult);
    printVal({ val: result, timeStamp: new Date() });
    console.log(numResult, textResult);
});
function printVal(obj) {
    console.log(obj.val);
}
function sum(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number')
        return num1 + num2;
    else if (typeof num1 === 'string' && typeof num2 === 'string')
        return num1 + ' ' + num2;
    else
        return +num1 + +num2;
}
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked');
    }, 1000);
});
myPromise.then(result => {
    console.log(result.split('w'));
});
