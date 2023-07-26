const express = require('express')
const bodyParser = require('body-parser')

const app = express() 
const PORT = 3004
const dados = [
  { id: 1, nome: 'Adrian' },
  { id: 2, nome: 'Ângelo' },
  { id: 3, nome: 'Ricardo' },
  { id: 4, nome: 'Keven' },
]

app.use(bodyParser.json())

app.get('/listar-pessoas', (req, res) => {
  res.status(200).json(dados)
})

app.get('/listar-pessoa/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = dados.findIndex(item => item.id == id)

  if (index != -1) {
    res.status(200).json({ pessoa: dados[index] })
  } else {
    res.status(404).json({ message: 'Pessoa não encontrada' })
  }
})

app.post('/incluir-pessoa', (req, res) => {
  const novaPessoa = req.body

  dados.push(novaPessoa)

  res.status(200).json(dados)
})

app.put('/atualizar-pessoa/:id', (req, res) => {
  const pessoaId = parseInt(req.params.id)
  const valores = req.body

  const index = dados.findIndex(item => item.id == pessoaId)

  if (index != -1) {
    dados[index] = { ...dados[index], ...valores}
    res.status(200).json({ message: 'Pessoa atualizada com sucesso', pessoa: dados[index] })
  } else {
    res.status(404).json({ message: 'Pessoa não encontrada' })
  }
})

app.delete('/delete-pessoa/:id', (req, res) => {
  const pessoaId = parseInt(req.params.id)
  const index = dados.findIndex(item => item.id == pessoaId)

  if (index != -1) {
    dados.splice(index, 1)
    res.status(200).json({ message: 'Pessoa excluída com sucesso' })
  } else {
    res.status(404).json({ message: 'Pessoa não encontrada' })
  }
})

app.listen(PORT, () => {
  console.log('Servidor está rodando na porta:', PORT)
})