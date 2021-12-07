<template>
  <div class="areaCadastro">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">Incluir novo Acompanhante</h4>
      </div>
      <div class="card-body">
        <form>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="exampleInputEmail1">Nome</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="nome"
              />
            </div>
            <div class="form-group col-md-8">
              <label for="exampleInputPassword1">Sobrenome</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                v-model="sobrenome"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="exampleInputEmail1">Data Nascimento</label>
              <input type="date" class="form-control" v-model="dt_nascimento" />
            </div>
            <div class="form-group col-md-4">
              <label for="exampleInputPassword1">Fone</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                v-model="fone"
              />
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Cadastrar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import api from "../services/api";

export default {
  name: "IncluirAcompanhante",
  data() {
    return {
      msg: "",
      error: true,
      acompanhante: {
        nome: "",
        sobrenome: "",
        dt_nascimento: "",
        dt_alta: "",
        fone: "",
        user_id: "",
      },
    };
  },
  methods: {
    async salvar() {
      const token = Cookies.get("__mytoken");

      const user = JSON.parse(localStorage.getItem("__User"));
      this.acompanhante.user_id = user.id;

      const header = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const res = await api.post("acompanhantes", this.acompanhante, header);

        //this.$router.replace("/Acompanhantes");

        this.msg = "Cadastrado com sucesso" + res;
        this.error = false;
        console.log(res);
        
      } catch {
        this.msg = "error";
      }
    },
  },
};
</script>
