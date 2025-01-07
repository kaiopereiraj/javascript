function contar() {
    var ini = document.querySelector('input#txti')
    var fim = document.querySelector('input#txtf')
    var pss = document.querySelector('input#txtp')
    var res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || pss.value.length == 0) {
        alert('Preencha todos os valores')
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando...<br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pss.value)
        if( p<= 0 ){
            alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if(i < f) {
            //Contagem Crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //Contagem Regressiva
            for(c = i; c>=f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}