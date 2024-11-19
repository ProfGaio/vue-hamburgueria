<script setup>
</script>

<template>
  <h1 class="h3 mt-4 mb-4 text-center">Acesse sua Conta</h1>
  <form class="form text-white">
    <div class="mb-3">
      <label class="form-label">E-mail</label>
      <input type="email" class="form-control" placeholder="Digite o e-mail" />
    </div>
    <div class="mb-3">
      <label class="form-label">Senha</label>
      <input
        type="password"
        class="form-control"
        placeholder="Informe sua senha"
      />
    </div>
    <div class="button">
      <button class="btn btn-warning">Acessar</button>
      <ul class="link">
        <li>
          <a href="/registrar">Criar conta</a>
        </li>
      </ul>
    </div>
  </form>
</template>
<style scoped>
.form {
  width: 400px;
  background-color: #2c1507;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  border-radius: 20px;
  box-shadow: .5px 10px 15px #bdbab1;
}

.button {
  display: flex;
  justify-content: center;
  justify-content: space-around;
}

.link {
  margin-bottom: 0;
  padding: 10px;
}

.link a {
    text-decoration: none;
    color: white;
    }

.link li {
    list-style-type: none;
}
</style>