const express = require('express')
const { PrismaClient } = require('@prisma/client')

const userController = require('../controllers/userController')

const router = express.Router()
const prisma = new PrismaClient()

router.use(express.json())

router.use((req, res, next) => {
  req.prisma = prisma
  next()
})

router.get('/listar-pessoas', userController.getPessoas)
router.get('/mostrar-pessoa/:id', userController.showPessoa)
router.post('/incluir-pessoa', userController.registerPessoa)
router.put('/atualizar-pessoa/:id', userController.updatePessoa)
router.delete('/deletar-pessoa/:id', userController.deletePessoa)

module.exports = router