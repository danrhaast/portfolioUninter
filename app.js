// Definição da constante express para utilização do express
const express = require('express') 

// Definição da constante app utilizando o express
const app = express()

// constante path requirindo o path para renderizar
// posteriormente o html do index.html
const path = require('path')

// Utilizando a constante app para definir
// definir uma pasta estática chamada
// front onde o app puxará todos os
// arquivos estáticos como .html e .css
app.use(express.static('front'))

// Criação da rota principal do sistema
// que renderiza o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'front', 'index.html'));
})

// Utilizando o app para definir também o
// servidor que irá rodar na porta 8000
// assim temos uma pequena construção
// back-end da página web.
app.listen(8000, function() {
    console.log('Servidor rodando na porta: 8000')
})