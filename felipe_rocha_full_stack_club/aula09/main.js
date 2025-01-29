const x = '';
// Uma string vazia sempre é false.
console.log(!!x);

const y = 0;
// Também é false.
console.log(!!y);

const a = null;
// Também é false.

const b = undefined;
//Também é false.

const list = [];
console.log(!!list)
// Uma lista vazia é true.

// caso queira checar se uma lista tem algum valor...

if (list.length > 0)// para checar se a liste tem algo dentro dela 
{ 
};

const object = {};
console.log(!!object);
// Um objeto vazio também é true.



