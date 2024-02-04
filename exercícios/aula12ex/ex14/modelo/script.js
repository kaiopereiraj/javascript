function carregar(){
    let msg = document.querySelector('div#msg')
    let img = document.querySelector('img#imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora < 13) {
        //Bom dia
        img.src = 'ftmanha.png'
        document.body.style.background = '#FD9861'
    } else if (hora < 19) {
        //Boa tarde
        img.src = 'fttarde.png'
        document.body.style.background ='#A43F00'
    } else {
        //Boa noite
        img.src = 'ftnoite.png'
        document.body.style.background ='#0C347A'
    }
}
