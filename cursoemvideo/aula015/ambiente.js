let num = [5, 8, 2, 9, 3];

console.log(`Nosso vetor é o ${num}`);

num[5] = 7; // adiciona o valor 7 no indice 5!

console.log(`Agora nosso vetor é ${num}`);

num.push(0); // Adiciona o valor 0 na última posição.

console.log(`O nosso vetor é ${num}`);

console.log(`O vetor tem ${num.length} posições`);

num.sort() // Coloca em ordem...

console.log(`Aqui estão ordenados ${num}`);

let pos = num.indexOf(8);

if (pos == -1) { // se retornar -1 significa que o valor procurado não foi encontrado
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
