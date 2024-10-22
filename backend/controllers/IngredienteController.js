const Pao = require('../models/Pao')
const Proteina = require('../models/Proteina')
const Queijo = require('../models/Queijo')
const Adicional = require('../models/Adicional')

module.exports = class IngredienteController{
    // Método registrarPao
    static async registrarPao(req, res){
        const sku = req.body.sku
        const descricao = req.body.descricao
        if(!sku){
            res.status(422).json({mensagem: "O código sku é obrigatório"})
            return
        }
        if(!descricao){
            res.status(422).json({mensagem: "A descrição é obrigatória"})
            return
        }
        const paoCadastrado = await Pao.findOne({sku: sku})

        if (paoCadastrado){
            res.status(422).json({mensagem: "Pão já cadastrado!"})
            return
        }
        /* Adicionando o pão ao bd */
        const pao = new Pao({sku,descricao})

        try{
            const novoPao = await pao.save()
        } catch(erro){
            res.status(500).json({mensagem: erro})
        }
    } /* Fim do método registrarPao */
    
    // Método registrarProteina
    static async registrarProteina(req, res){
        const sku = req.body.sku
        const descricao = req.body.descricao
        if(!sku){
            res.status(422).json({mensagem: "O código sku é obrigatório"})
            return
        }
        if(!descricao){
            res.status(422).json({mensagem: "A descrição é obrigatória"})
            return
        }
        const proteinaCadastrada = await Proteina.findOne({sku: sku})

        if (proteinaCadastrada){
            res.status(422).json({mensagem: "Proteína já cadastrada!"})
            return
        }
        /* Adicionando a proteína ao bd */
        const proteina = new Proteina({sku,descricao})

        try{
            const novaProteina = await proteina.save()
        } catch(erro){
            res.status(500).json({mensagem: erro})
        }
    } 
    // Fim do método registrarProteina

    // Início do método registrarQueijo
    static async registrarQueijo(req, res){
        const sku = req.body.sku
        const descricao = req.body.descricao
        if(!sku){
            res.status(422).json({mensagem: "O código sku é obrigatório"})
            return
        }
        if(!descricao){
            res.status(422).json({mensagem: "A descrição é obrigatória"})
            return
        }
        const queijoCadastrado = await Queijo.findOne({sku: sku})

        if (queijoCadastrado){
            res.status(422).json({mensagem: "Pão já cadastrado!"})
            return
        }
        /* Adicionando o queijo ao bd */
        const queijo = new Queijo({sku,descricao})

        try{
            const novoQueijo = await queijo.save()
        } catch(erro){
            res.status(500).json({mensagem: erro})
        }
    }

    static async registrarAdicional(req, res){
        const sku = req.body.sku
        const descricao = req.body.descricao
        if(!sku){
            res.status(422).json({mensagem: "O código sku é obrigatório"})
            return
        }
        if(!descricao){
            res.status(422).json({mensagem: "A descrição é obrigatória"})
            return
        }
        const adicionalCadastrado = await Adicional.findOne({sku: sku})

        if (adicionalCadastrado){
            res.status(422).json({mensagem: "Adicional já cadastrado!"})
            return
        }
        /* Adicionando o pão ao bd */
        const adicional = new Adicional({sku,descricao})

        try{
            const novoPao = await adicional.save()
        } catch(erro){
            res.status(500).json({mensagem: erro})
        }
    }
}