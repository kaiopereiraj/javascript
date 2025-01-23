function sum (a, b = 19) {
    return a + b;
}

const sumArrow = (a, b = 19) => {
    console.log(a, b);
    return a + b;
}

const sumValue = sumArrow(2);

console.log(sumValue);