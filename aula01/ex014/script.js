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

}