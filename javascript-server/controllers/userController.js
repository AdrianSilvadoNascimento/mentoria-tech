const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const getPessoas = async (req, res) => {
  const users = await prisma.user.findMany()
  
  res.status(200).json(users)
}

const showPessoa = async (req, res) => {
  const id = req.params.id
  const pessoa = await prisma.user.findUnique({
    where: {
      id: id
    }
  })

  if (pessoa) {
    res.status(200).json(pessoa)
  } else {
    res.json({ message: 'Usuário não encontrado' })
  }
}

const registerPessoa = async (req, res) => {
  const novaPessoa = req.body

  const novaPessoaAdicionada = await prisma.user.create({
    data: novaPessoa,
  })
  
  res.status(200).json({ message: 'Pessoa registrada com sucesso!', novaPessoaAdicionada})
}

const updatePessoa = async (req, res) => {  
  const pessoaId = req.params.id
  const novosValores = req.body

  const usuarioAtualizado = await prisma.user.update({
    where: {
      id: pessoaId,
    },
    data: novosValores,
  })

  if (!usuarioAtualizado) {
    res.json({ message: 'Usuário não encontrado' })
  } else {
    res.status(200).json({ message: 'Usuário atualizado:', usuarioAtualizado })
  }
}

const deletePessoa = async (req, res) => {
  const pessoaId = req.params.id

  const usuarioParaDeletar = await prisma.user.findUnique({
    where: {
      id: pessoaId,
    }
  })

  if (!usuarioParaDeletar) {
    res.json({ message: 'Usuário não encontrado' })
  } else {
    await prisma.user.delete({
      where: {
        id: pessoaId
      }
    })

    res.status(200).json({ message: 'Usuário deletado com sucesso', usuarioParaDeletar })
  }
}

module.exports = {
  getPessoas,
  registerPessoa,
  showPessoa,
  updatePessoa,
  deletePessoa,
}
