const router = require('express').Router()

const IngredienteController = require('../controllers/IngredienteController')
router.get('/paes',IngredienteController.buscarPaes)
router.get('/proteinas',IngredienteController.buscarProteinas)
router.get('/queijos',IngredienteController.buscarQueijos)
router.get('/adicionais',IngredienteController.buscarAdicionais)
router.post('/novoPao',IngredienteController.registrarPao)
router.post('/novaProteina',IngredienteController.registrarProteina)
router.post('/novoQueijo',IngredienteController.registrarQueijo)
router.post('/novoAdicional',IngredienteController.registrarAdicional)
module.exports = router
