const Cliente = require('../models/Cliente')
const bcrypt = require('bcrypt')
const criarClienteToken = require('../helpers/cria-cliente-token')
/*Criação da classe ClienteController contendo operações (métodos)
que podem ser utilizados para gerenciar o cliente */ 
module.exports = class ClienteController{
    static async registrar(req, res){
        const nome = req.body.nome
        const email = req.body.email
        const telefone = req.body.telefone
        const senha = req.body.senha
        const senhaconf = req.body.senhaconf

        if(!nome){
            res.status(422).json({mensagem: "O nome é obrigatório"})
            return
        }

        if(!email){
            res.status(422).json({mensagem: "O e-mail é obrigatório"})
            return
        }

        if(!telefone){
            res.status(422).json({mensagem: "O telefone é obrigatório"})
            return
        }

        if(!senha){
            res.status(422).json({mensagem: "A senha é obrigatória"})
            return
        }

        if(!senhaconf){
            res.status(422).json({mensagem: "Confirme a senha"})
            return
        }

        /* Verifica se cliente já está cadastrado */
        const clienteExiste = await Cliente.findOne({email: email})

        if (clienteExiste){
            res.status(422).json({mensagem: "E-mail já cadastrado"})
            return
        }

        /* Criação de senha */
        const salt = await bcrypt.genSalt(12)
        const senhaHash = await bcrypt.hash(senha,salt)

        /* Adicionando o cliente ao bd */
        const cliente = new Cliente({nome, email, telefone, 
            senha: senhaHash })

        try{
            const novoCliente = await cliente.save()
            await criarClienteToken(novoCliente, req, res)
        } catch(erro){
            res.status(500).json({mensagem: erro})
        }
    } /* Fim do método registrar */

    /* Início do método de login */
    static async login(req, res){
        const {email, senha} = req.body
        /* VALIDANDO entrada de e-mail e senha */
        if(!email){
            res.status(422).json({mensagem: "O e-mail é obrigatório"})
            return
        }
        if(!senha){
            res.status(422).json({mensagem: "A senha é obrigatória"})
            return
        }
        /* VERIFICA se o e-mail está cadastrado */
        const cliente = await Cliente.findOne({email: email})
        
        if(!cliente){
            res.status(422).json({mensagem:"Usuário não cadastrado"})
            return
        }
        /* VERIFICA se senha informada está cadastrada */
        const verificaSenha = await bcrypt.compare(senha, cliente.senha)
        if(!verificaSenha){
            res.status(422).json({mensagem:"Senha não confere!"})
            return
        } 
        await criarClienteToken(cliente,req,res)
    } /* FIM do método de login */

    static async verificaUsuario(req, res){
        let usuarioAtual

        console.log(req.headers.autorizacao)

        if (req.headers.autorizacao){
            const token = getToken(req)
            const decodificado = jwt.verify(token,'mysecret')
            usuarioAtual = await Cliente.findById(decodificado.id)
            usuarioAtual.senha = undefined 
            //segurança aqui: esvazia o retorno da senha
        } else{
            usuarioAtual= null
        }

        res.status(200).send(usuarioAtual)
    }

}