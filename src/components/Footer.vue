<script>
    export default{
        data(){
            return{

            }
        },
        methods:{
            pegaDataAtual(){
                const d = new Date()
                let dataAtual = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`
                return dataAtual 
            }
        },
    }
</script>

<template>
    <footer id="footer" class="container-fluid">
        <div id="container-footer" class="row text-white align-items-center justify-content-evenly align-self-center">
            <div class="col-4">
                <p class="m-0 text-center">Desenvolvido por Gaio B. Oliveira</p>
            </div>
            <div class="col-4 offset-4">
                <p class="m-0 text-center">Acessado em: {{pegaDataAtual()}}</p>
            </div>
        </div>
    </footer>
</template>
<style scoped>
    #container-footer{
       margin-top: 650px;
       height: 50px;
       background-color: #212529;
       font-size: 0.8em;
    }
</style>

