const names =['Kaio', 'Joaquim', 'Gil', 100];

const joaquim = names[1];

console.log(joaquim);

// names.push('Brasil'); //Vai adicionar mais um item no final da lista

names.unshift('Ivonete'); // Vai adicionar mais um item no inicio da lista

names.pop(); // Vai remover o último item da lista ...

console.log(names);

const indexOfGil = names.indexOf('Gil');

const sortedNames = names.sort();

const namesIsArray = Array.isArray(names);

console.log(sortedNames);
console.log(namesIsArray);