/*document.getElementById("verificar").addEventListener("click" verificar)
function verificar() {
    const data = new Date() //para receber a data
    const anoAtual = data.getFullYear //para verificar o anoatual
    const ano = window.document.getElementById('ano') //constante para o elemento ano
    const anoNascimento = Number(ano.value) //converte o elemento ano para numero
    
    if (anoNascimento === 0 || anoNascimento > anoAtual) {
        alert('Verifique o ano de nascimento e tente novamente')
    } else {
        const idade = anoAtual - anoNascimento
    }

}*/

function verificar() {
    const data = new Date()
    const ano = data.getFullYear()
    const fano = window.document.getElementById('txtano')
    const res = window.document.querySelector('#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        const fsex = window.document.getElementsByName('radsex')
        const idade = ano - Number(fano.value)
        let genero = '' 
        let img = document.createElement('img')      
        img.setAttribute('id', 'foto') // este cmd seria em substituição do img no html 
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'imagem/menino-pequeno.jpg')
            } else if (idade < 21) {
                // img.setAttribute('src', 'link da foto')
            } else if (idade < 50 ) {
                // adulto
            } else if (idade > 50 ) {
                // idoso
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // criança
            } else if (idade < 21) {
                // jovem
            } else if (idade < 50 ) {
                // adulto
            } else if (idade > 50 ) {
                // idoso
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}