const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const showConta = async (req, res) => {
  const id = req.params.id
  const usuario = await prisma.user.findUnique({
    where: {
      id: id
    }
  })

  if (usuario) {
    const contaBanco = await prisma.contaBanco.findMany({
      where: {
        userId: usuario.id
      }
    })

    res.status(200).json(contaBanco)
  }
}

const registerConta = async (req, res) => {
  const novaContaCriada = await prisma.user.findUnique({
    where: {
      id: req.params.id
    }
  })
  
  res.status(200).json({ message: 'Conta registrada com sucesso!', novaContaCriada})
}

const updateConta = async (req, res) => {  
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

const deleteConta = async (req, res) => {
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
  showConta,
  registerConta,
  updateConta,
  deleteConta,
}
