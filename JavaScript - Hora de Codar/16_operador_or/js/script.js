var idade = 18
var nome = 'Kaio'

if (nome == 'Kaio' || idade > 20){
    console.log('Pode entrar no sistema como admin!')
} else {
    console.log('Não pode entrar no sistema!')
}

if ( (nome == 'Sem nome' || 12 > 20) && 10 == 10) {
    console.log('Testando... OK')
} else {
    console.log('Testando... False')
}

if ((nome == 'Kaio' || 12 > 20 ) && 10 == 10) {
    console.log('Testando... OK')
} else {
    console.log('Testando... False')
}