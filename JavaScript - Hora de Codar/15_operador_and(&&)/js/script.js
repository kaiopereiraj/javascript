var idade = 18
var nome = 'Kaio'

if (nome == 'Kaio' && idade == 18){
    console.log('O Kaio pode entrar no sistema!')
} else {
    console.log('Não pode entrar no sistema')
}

if (1 == 1 && 3 > 2 && true) {
    console.log('Passou')
}

if ((1 == 1 && 3 > 2) && true) {
    console.log('Passou')
} else if (nome == 'Kaio' && idade >= 16) {
    console.log('Somente um exemplo!')
}