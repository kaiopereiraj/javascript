let idade = 0;

while (idade < 20) {
    console.log(`${idade} é menor do que 19`)
    idade++
}

const person = {
    name: 'Kaio',
    age: 21,
};

for (property in person) {
    console.log(person[property]);
};