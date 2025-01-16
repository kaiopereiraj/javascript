const sum = 1 + 1;

if (sum === 2) {
    console.log(`Sum is 2.`)
} else if (sum === 3) {
    console.log(`Sum is 3.`)
} else {
    console.log(`Sum is not 2.`)
}

// && ... and
// || ... or

const sum1 = 2 + 2;
const sum2 = 3 + 5;


if (sum1 == 4 && sum2 == 6) { // só será executado se as duas condições forem verdadeiras
    console.log(`Sum1 is 4 and Sum2 is 6.`)
}  

if (sum1 == 4 || sum2 == 5) { // será executado se uma das condições forem verdadeiras
    console.log(`Sum1 is 4 or Sum2 is 5`)
}