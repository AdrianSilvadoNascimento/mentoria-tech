const express = require('express')
const { PrismaClient } = require('@prisma/client')

const contaBancoController = require('../controllers/contaBancoController')

const router = express.Router()
const prisma = new PrismaClient()

router.use(express.json())

router.use((req, res, next) => {
  req.prisma = prisma
  next()
})

router.get('/mostrar-conta-usuario/:id', contaBancoController.showConta)
router.post('/criar-nova-conta/:id', contaBancoController.registerConta)
router.put('/atualizar-dados/:id', contaBancoController.updateConta)
router.delete('/deletar-conta-bancaria/:id', contaBancoController.deleteConta)

module.exports = router
