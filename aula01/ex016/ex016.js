function verificar(){
let ini = window.document.getElementById('nini')
let nfim = window.document.getElementById('nfim')
let npas = window.document.getElementById('npas')
let res = window.document.getElementById('res')


if (ini.value.length == 0 || nfim.value.length == 0 || npas.value.length == 0) {
    window.alert('Verifique os dados inseridos')
} else {
    res.innerHTML = 'Contando:'
    let i = Number(ini.value)
    let f = Number(nfim.value)
    let p = Number(npas.value)
    
    for(c = i; c <= f; c += p) {
        res.innerHTML += `${c}`
    }

}

}