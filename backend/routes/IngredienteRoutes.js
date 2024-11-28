const router = require('express').Router()

const IngredienteController = require('../controllers/IngredienteController')
router.get('/paes',IngredienteController.buscarPaes)
router.post('/novoPao',IngredienteController.registrarPao)
router.post('/novaProteina',IngredienteController.registrarProteina)
router.post('/novoQueijo',IngredienteController.registrarQueijo)
router.post('/novoAdicional',IngredienteController.registrarAdicional)
module.exports = router
