<script>
import axios from 'axios'
export default{
    data(){
        return{
            nome: "",
            email: "",
            senha:"",
            confsenha:"",
            telefone:""

        }
    },
    methods:{
           async registrar(){
                try{
                const resposta = await axios.post('clientes/registrar',{
                    nome: this.nome,
                    email: this.email,
                    senha: this.senha,
                    confsenha:this.confsenha,
                    telefone: this.telefone
                }) 
            } catch (erro) {
                console.log(erro)
            } 
        }

    }   
}
</script>

<template>
    <div class="container col-11 col-md-9" id="form-container">
        <!-- GRID LAYOUT para o form row (linha) e col (colunas) -->
        <div class="row align-items-center gx-5">
            <div class="col-md-6 order-md-2">
                <h2 class="h4 mt-3">Faça o seu Registro</h2>
                <form>
                    <div class="form-floating mb-3">
                        <input type="text" name="nome" id="nome" v-model="nome"
                        class="form-control" placeholder="Digite o seu nome">
                        <label for="email" class="form-label">Digite o seu nome</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" name="email" id="email" v-model="email"
                        class="form-control" placeholder="Digite o seu e-mail">
                        <label for="email" class="form-label">Digite o seu e-mail</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" name="password" id="password" v-model="senha" 
                        class="form-control" placeholder="Digite a senha">
                        <label for="password" class="form-label">Digite a senha</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" name="confpassword" id="confpassword" v-model="confsenha" 
                        class="form-control" placeholder="Digite a senha">
                        <label for="password" class="form-label">Confirme a senha</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" name="telefone" id="telefone" v-model="telefone" 
                        class="form-control" placeholder="Digite a senha">
                        <label for="password" class="form-label">Digite seu telefone com DDD</label>
                    </div>
                    <button type="button" class="btn btn-primary" @click="registrar">Registrar</button>
                </form>
            </div>
            <div class="col-md-6 order-md-1">
                <div class="col-12" id="link-container">
                    <a href="/login">Já possuo cadastro</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
body {
    font-family: "Roboto", sans-serif;
    background-color: #f8f8f8;
}

/* Estilos para o container do formulário */
#form-container {
    background-color: #fff;
    border-radius: 20px;

    /* Sombreamento: horizontal, vertical, espalhamento (borrão), cor rgba e opacidade */
    box-shadow: .5px 10px 15px rgba(0, 0, 0, .2);

    margin: 25px auto;
    padding: 25px;
}

/* Estilo para o Título */
#form-container h2 {
    font-weight: 900;
    margin-bottom: 30px;
}

/* Padding no form */
#form-container form {
    padding-bottom: 50px;
}



/* RESTILIZANDO OS INPUTS PARA REMOVER BORDAS */

#form-container .form-control {
    border: none;
    border-bottom: 1px solid #CCC;
    border-radius: 0;
}

#form-container .form-control:focus {
    box-shadow: none;
}


/* ESTILO PARA OS LABELS */

#form-container .form-floating label {
    color: #CCC;
}

#form-container .form-floating>.form-control:focus~label {
    color: #222;
}

/* IMAGEM */
.row .align-items-center{
    align-content: center;
    height: 100%;
    padding: 75px 0;
}

/* Estilos para o link */

#link-container{
    text-align: center;
    padding-top: 50px; 
}


#link-container a {
    color: #222;
    font-size: 0.9rem;
    transition: .5s;
}


#link-container a:hover {
    color: blue;
}

</style>