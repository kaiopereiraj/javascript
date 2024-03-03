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
            if (idade < 6) {
                //bebê 
                img.setAttribute('src', 'bebe-m.png')//pra adicionar imagem!
            } else if (idade < 12) {
                //Criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 22) {
                //Adolescente
                img.setAttribute('src', 'garoto.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade < 6) {
                //bebê
                img.setAttribute('src', 'bebe-f.png')
            } else if (idade < 12) {
                //Criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 22) {
                //Adolescente
                img.setAttribute('src', 'garota.png')
            } else if (idade < 60) {
                //Adulta
                img.setAttribute('src', 'mulher.png')
            } else {
                //idosa
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} de ${idade} anos <br>`
        res.appendChild(img)
    }
}