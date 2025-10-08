function carregar() {
    const msg = window.document.getElementById('msg')
    const img = window.document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/foto-manha.jpg'
            document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/foto-tarde.jpg'
            document.body.style.background = '#b9846f'
     } else {
        img.src = 'imagens/foto-noite.jpg'
            document.body.style.background = '#515154'
    }
}

