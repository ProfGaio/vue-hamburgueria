<script>
import Mensagem from './Mensagem.vue'
import axios from '@/axios'
export default{
    data(){
        return{
           pao:"",
           proteina:"",
           queijo:"", 
           adicionais: [],
           status: "Solicitado",
           paes: null,
           proteinas: null,
           queijos: null,
           bdAdicionais: null,
           msg: null    
        }
    },
    methods:{
        async buscarIngredientes(){
            try{
                const dadosPaes = await axios.get('/ingredientes/paes') 
                this.paes = dadosPaes.data
                const dadosProteinas = await axios.get('/ingredientes/proteinas') 
                this.proteinas = dadosProteinas.data
                const dadosQueijos = await axios.get('/ingredientes/queijos') 
                this.queijos = dadosQueijos.data
                const dadosAdicionais = await axios.get('/ingredientes/adicionais') 
                this.bdAdicionais = dadosAdicionais.data
               
            } catch(erro){
                console.log(erro)
            }

         },
         
        async criarSanduiche(e){
            e.preventDefault()

            const dados = {
                cliente: this.cliente,
                pao: this.pao,
                proteina: this.proteina,
                queijo: this.queijo,
                adicionais: Array.from(this.adicionais),
                status: "Solicitado"
            }
            const dadosJson = JSON.stringify(dados)
            const req = await fetch('http://localhost:3000/sanduiches', 
            {method: "POST", headers: {"Content-Type": "application/json"},  
            body: dadosJson})
            const res = await req.json()
            //Texto da mensagem do componente Mensagem.Vue
            this.msg = "Sanduíche criado com sucesso!"
            setTimeout(
                ()=>{
                    this.msg=""
                },
                2000)
                this.pao=""
                this.proteina=""
                this.queijo=""
                this.adicionais=""
        } 
    },
    mounted() {
        this.buscarIngredientes()
    },
    components: {
        Mensagem
    }
}
</script>

<template>
    <h2 class="text-center mt-4">Monte o seu lanche</h2>
    <form class="form-container"  v-on:submit="criarSanduiche">
            <div class="form-items">
                <label class="form-label">Tipo de Pão</label>
                <select v-model="pao" class="form-select">
                <option disabled>Escolha seu pão</option>
                <option v-for="pao in paes" :key="pao.sku" :value="pao.descricao">{{pao.descricao}}</option>
                </select>
            </div>
            <div class="form-items">
                <label class="form-label">Proteína</label>
                <select class="form-select" v-model="proteina">
                <option disabled>Escolha sua proteína</option>
                <option v-for="proteina in proteinas" :key="proteina.id" :value="proteina.descricao">{{proteina.descricao}}</option>
                </select>
            </div>
            <div class="form-items">
                <label class="form-label">Queijo</label>
                <select class="form-select" v-model="queijo" >
                <option selected>Escolha seu queijo</option>
                <option v-for="queijo in queijos" :key="queijo.sku" :value="queijo.descricao">
                    {{queijo.descricao}}
                </option>
                </select>
            </div>
            <label class="form-label m-2">Adicionais</label>
            <div class="container-checkbox">
                <div v-for="adicional in bdAdicionais" :key="adicional.sku" class="checkbox-item">
                    <input type="checkbox" v-model="adicionais" :value="adicional.descricao" class="form-check-input">
                    <label class="form-check-label">{{adicional.descricao}}</label>
                </div>
            </div>
            <div class="form-items text-center">
                <input type="submit" class="btn btn-outline-warning" value="Criar Sanduíche">
            </div>
            <Mensagem :msg="msg" v-show="msg"/>
    </form>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

h2 {
    font-family: 'Poppins', sans-serif;
}

.form-container{
    margin: 20px auto;
    padding: 5px;
    width: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #2c1507;
    color: white;
    border-radius: 15px;
}

.form-items{
    margin: 10px;
}

.container-checkbox {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.form-check-input{
    padding: 5px;
    margin: 5px;
}

h2 {
    text-decoration-line: underline;
    font-weight: bold;
    text-decoration-color: #FFC552;
}

.form-label {
   font-weight: 500;
   color: inherit;
   text-decoration: underline 0.10em rgba(255, 255, 255, 0);
   transition: text-decoration-color 300ms;
}

.form-label:hover {
    text-decoration-color: #FFCA2C;
}

</style>
