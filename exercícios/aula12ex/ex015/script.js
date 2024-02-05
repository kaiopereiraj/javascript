function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('input#txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('Verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'imagem')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade == 0 && idade < 11) {
                //criança
            } else if (idade < 21) {
                //Jovem
            } else if (idade < 60) {
                //Adulto
            } else {
                //Idoso
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade == 0 && idade < 11) {
                //criança
            } else if (idade < 21) {
                //Jovem
            } else if (idade < 60) {
                //Adulto
            } else {
                //Idoso
            }
        }
        res.innerHTML = `${genero} ${idade}`
    }
}