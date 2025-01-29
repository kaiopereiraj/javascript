const sum = 1 + 2;

if (sum === 2) {
    console.log(`Sum is 2.`)
} else if (sum === 3) {
    console.log(`Sum is 3.`)
} else {
    console.log(`Sum is not 2.`)
}


let number = sum === 2 ? 2 : 4;

// if (sum === 2){
//     number = 2
// } else {
//     number = 4
// }

console.log(`Number é igual a ${number}`)

const car = 'BMW';

switch (car) {
    case 'BMW':
        console.log('BMW is beautifull')
        break;
    case 'Ferrari':
        console.log('Ferrari is very red')
        break;
    case 'Tesla':
        console.log('Tesla is very smart');
}