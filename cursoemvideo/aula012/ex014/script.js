function carregar () {
    var msg = window.document.querySelector('div#msg');
    var img = window.document.querySelector('img#image');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora >= 0 && hora < 12) {
        document.body.style.background = '#FFF1C7'
        img.src = 'imagens/manha.png' 
    } else if (hora >= 12 && hora < 19) {
        document.body.style.background = '#C2663B'
        img.src = 'imagens/tarde.png'
    } else {
        document.body.style.background = '#1A282B'
        img.src = 'imagens/noite.png'

    }
}
