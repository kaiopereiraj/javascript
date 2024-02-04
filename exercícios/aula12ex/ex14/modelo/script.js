
function carregar(){
    let msg = document.querySelector('div#msg')
    let img = document.querySelector('div#ft')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'ftmanha.png'
    } else if (hora >= 12 && hora <19) {
        //boa tarde
        img.src = 'fttarde.png'
    } else {
        //boanoite
        img.src = 'ftnoite.png'
    }
}
