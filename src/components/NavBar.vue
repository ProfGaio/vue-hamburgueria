<script>

</script>

<template>
        <nav class="navbar navbar-expand-lg p-2">
            <div class="container-fluid">
                <img src="../assets/icon.png" alt="" id="logo">
                <div class="align-title"><a href="/" class="navbar-brand" id="title">Zé Hamburgueria</a></div>
                <button class="navbar-toggler" type="button" data-bs-toggle="colapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toogle navigation"> 
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="row">
                    <ul class="navbar nav col-12">
                         <li class="nav-item" id="pedidos">
                            <a href="/login" class="nav-link text-white">Login</a>
                        </li>
                    
                         <li class="nav-item" id="pedidos">
                            <a href="/pedidos" class="nav-link text-white">Pedidos</a>
                        </li>
                    
                    
                         <li class="nav-item" id="pedidos">
                            <a href="/about" class="nav-link text-white">Sobre</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mansalva&display=swap');

.navbar{
    background-color:#2c1507;
}

#title{
    font-family: 'Mansalva', cursive;
    font-size: 2.7rem;
}

.align-title{
    padding-left: 180px;
}

a {
    color: #FFCA2C;
    font-family: 'Poppins', sans-serif;
}
a:hover{
    color: #eb9125;
}

#pedidos {
font-size: 1.2em;
color: inherit;
text-decoration: underline 0.15em rgba(255, 255, 255, 0);
transition: text-decoration-color 300ms;
}

#pedidos:hover {
 text-decoration-color: #FFCA2C;
}

#logo {
    width: 60px;
    height: 60px;
}

</style>