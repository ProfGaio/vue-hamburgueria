<script>
export default {
  data() {
    return {
      sanduiches: null,
      status: [],
    };
  },
  methods: {
    async getPedidos() {
      const req = await fetch("http://localhost:3000/sanduiches");
      const dados = await req.json();
      this.sanduiches = dados;
      this.getStatus();
    },
    async getStatus() {
      const req = await fetch("http://localhost:3000/status");
      const bdStatus = await req.json();
      this.status = bdStatus;
    },
     async cancelarPedido(id){
        const req = await fetch(`http://localhost:3000/sanduiches/${id}`, {method:"DELETE"})
        const res = await req.json()
        this.getPedidos()
    },
    async atualizarStatus(event, id){
        const novoStatus = event.target.value
        const dados = JSON.stringify({status: novoStatus})
        const req = await fetch(`http://localhost:3000/sanduiches/${id}`, {method:"PATCH", headers:{"Content-Type":"application/json"}, body:dados})
    }
    
},
  mounted() {
    this.getPedidos();
  },
};
</script>

<template>
  <div id="tabela-pedidos" class="container">
    <table class="table">
      <thead>
        <tr>
          <th id="id">ID</th>
          <th>Cliente</th>
          <th>Pão</th>
          <th>Proteína</th>
          <th>Queijo</th>
          <th>Adicionais</th>
          <th>Situação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sanduiche in sanduiches" :key="sanduiche.id">
          <td id="id">{{ sanduiche.id }}</td>
          <td>{{ sanduiche.cliente }}</td>
          <td>{{ sanduiche.pao }}</td>
          <td>{{ sanduiche.proteina }}</td>
          <td>{{ sanduiche.queijo }}</td>
          <td>
            <ul
              v-for="(adicional, index) in sanduiche.adicionais"
              :key="index"
              class="list-group"
            >
              <li class="list-group-item">{{ adicional }}</li>
            </ul>
          </td>
          <td class="situacao">
            <select name="status" class="form-select situacao-item" @change="atualizarStatus($event, sanduiche.id)">
              <option
                v-for="s in status"
                :key="s.id"
                :selected="sanduiche.status == s.descricao"
              >
                {{ s.descricao }}
              </option>
            </select>
            <button
              type="button"
              class="btn btn-warning situacao-item"
              @click="cancelarPedido(sanduiche.id)"
            >
              Excluir Pedido
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
thead {
  background-color: #ffca2c;
}

#id {
  background-color: #ffca2ce3;
  border-color: #ffca2c;
}

th,
td {
  text-align: center;
}

.btn {
  margin: 6px;
}

.situacao {
    display: flex;
    flex-direction: column;
}

.situacao-item {
    justify-content: space-evenly;
}

</style>