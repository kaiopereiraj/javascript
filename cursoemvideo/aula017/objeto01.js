let amigo = {
    nome: 'Kaio', 
    sexo:'Masculino',
    peso: 83.4,
    engordar(p){
        console.log('engordou')
        this.peso += p
    }
}

amigo.engordar(2);

console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);