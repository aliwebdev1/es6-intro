function add(num1, num2 = 1) {

    // old 2  num2 = num2 || 0;
    // old 1 if (num2 == undefined) {
    //     num2 = 5;
    // }

    const total = num1 + num2;
    return total
}

const result = add(15, 13)
console.log(result);