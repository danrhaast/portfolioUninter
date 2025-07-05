const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('front'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'front', 'index.html'));
})

function enviarWhats (event) {
    event.preventDefault()

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const msg = document.getElementById('mensagem').value
    const telefone = '555492029984'

    const texto = `Olá me chamo ${nome}, ${msg}, este é o meu email ${email}`
    const msgformt = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}?text=${msgformt}`

    window.open(url, '_blank')
    console.log('Aplicação bem sucedida')
}

app.listen(8000, function() {
    console.log('Servidor rodando na porta: 8000')
})