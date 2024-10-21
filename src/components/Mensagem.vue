<script>
export default{
    name: "Mensagem",
    props:{
        msg: String
    }
}
</script>

<template>
    <div class="mensagem">
        <p class="texto">{{msg}}</p>
    </div>
</template>

<style scoped>
.mensagem {
    width: 255px;
    height: 55px;
    border-radius: 15px;
    background-color: #dcffb9a8;
    color: white;
    margin: 20px auto;
    font-size: 1em;
    padding: 5px;
    font-weight: bold;
}

.texto {
   margin: 0;
   margin-top: 10px;
   margin-left: 7px;
}

</style>