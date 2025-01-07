function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked)  {
            genero = 'Homem'
            if (idade < 4) {
                img.setAttribute('src', 'h_bebe.png')
            } else if (idade < 12) {
                img.setAttribute('src', 'h_menino.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'h_adolescente.png')
            } else if (idade < 60){
                img.setAttribute('src', 'h_adulto.png')
            } else {
                img.setAttribute('src', 'h_idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade < 4) {
                img.setAttribute('src', 'm_bebe.png')
            } else if (idade <12) {
                img.setAttribute('src', 'm_menina.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'm_adolescente.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'm_adulta.png')
            } else {
                img.setAttribute('src', 'm_idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}