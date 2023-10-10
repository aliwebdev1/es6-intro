function add(num1, num2) {
    return num1 + num2;
}

const add2 = function add(num1, num2) {
    return num1 + num2;
}

const add3 = function (num1, num2) {
    return num1 + num2;
}

const add4 = (num1, num2) => num1 + num2;


const sum = add(10, 2)
const sum1 = add2(10, 2)
const sum2 = add3(10, 2)
const sum3 = add4(10, 2)


console.log(sum, sum1, sum2, sum3);