function contar() {
    let ini = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length ==0 || passo.value.length == 0) {
        alert('[ERRO] faltam dados')
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0) {
            alert('Passo inválido')
            p = 1
        }
        if(i < f) {
            //contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        } else {
            //contagem regressiva
            for(let c = i; c >= f; c-= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
    }
    res.innerHTML += `\u{1f3c1}`
}