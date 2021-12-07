<template>
  <div class="areaCadastro">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">Incluir novo Paciente</h4>
      </div>
      <div class="card-body">
        <div class="alert alert-danger" role="alert" v-if="msg == error">
          Erro ao incluir o paciente
        </div>
        <div class="alert alert-sucess" role="alert" v-if="!error">
          Paciente atualizado com sucesso {{ msg }}
        </div>
        <form @submit.stop.prevent="atualizar">
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="exampleInputEmail1">Nome</label>
              <input
                type="text"
                class="form-control"
                id="nome"
                aria-describedby="emailHelp"
                v-model="paciente.nome"                
              />
            </div>
            <div class="form-group col-md-8">
              <label for="exampleInputPassword1">Sobrenome</label>
              <input
                type="text"
                class="form-control"
                id="sobrenome"
                v-model="paciente.sobrenome"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="exampleInputEmail1">Data Nascimento</label>
              <input
                type="date"
                class="form-control"
                v-model="paciente.dt_nascimento"
              />
            </div>
            <div class="form-group col-md-4">
              <label for="exampleInputPassword1">Contato</label>
              <input
                type="text"
                class="form-control"
                id="contato"
                v-model="paciente.contato"
              />
            </div>
            <div class="form-group col-md-4">
              <label for="exampleInputPassword1">Fone</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                v-model="paciente.fone"
              />
            </div>
          </div>
          <hr />
          <div class="form-row">
            <div class="form-group col-md-2">
              <label for="exampleInputEmail1">CEP:</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                v-model="paciente.cep"
              />
            </div>
            <div class="form-group col-md-8">
              <label for="exampleInputPassword1">Endereço:</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                v-model="paciente.endereco"
              />
            </div>
            <div class="form-group col-md-2">
              <label for="exampleInputPassword1">Nº</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                v-model="paciente.numero"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-2">
              <label for="exampleInputEmail1">Complemento:</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                v-model="paciente.compl"
              />
            </div>
            <div class="form-group col-md-4">
              <label for="exampleInputPassword1">Bairro:</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                v-model="paciente.bairro"
              />
            </div>
            <div class="form-group col-md-4">
              <label for="exampleInputPassword1">Cidade:</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                v-model="paciente.cidade"
              />
            </div>
            <div class="form-group col-md-2">
              <label for="exampleInputPassword1">UF:</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                v-model="paciente.uf"
              />
            </div>
          </div>
          <hr />
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="exampleInputEmail1">Unidade:</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                v-model="paciente.unidade"                
              />
            </div>
            <div class="form-group col-md-4">
              <label for="exampleInputPassword1">Enfermaria:</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                v-model="paciente.enfermaria"
              />
            </div>
            <div class="form-group col-md-4">
              <label for="exampleInputPassword1">Leito:</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                v-model="paciente.leito"                
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="exampleInputEmail1">Observação:</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                v-model="paciente.observacao"
              />
            </div>
          </div>

          <button type="submit" class="btn btn-primary" ref="meu modal">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import api from "../services/api";

export default {
  name: "editPaciente",
  data() {
    return {
      msg: "",
      error: true,
      paciente: {
        id: "",
        nome: "",
        sobrenome: "",
        unidade: "",
        enfermaria: "",
        leito: "",
        acompanhante: "",
        dt_nascimento: "",
        dt_alta: "",
        observacao: "",
        cep: "",
        endereco: "",
        numero: "",
        compl: "",
        cidade: "",
        bairro: "",
        uf: "",
        contato: "",
        fone: "",
        user_id: "",
      },
    };
  },
  mounted() {
    const token = Cookies.get("__mytoken");

    return api
      .get("pacientes", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((resposta) => {
        this.dashboard = resposta.data;
      });
  },
  methods: {
    async getPaciente(paciente) {
      const res = await api.get
    },

    async atualizar() {
      const token = Cookies.get("__mytoken");

      const user = JSON.parse(localStorage.getItem("__User"));
      this.paciente.user_id = user.id;

      const header = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const res = await api.put("pacientes", this.paciente, header);

        this.$router.replace("/Pacientes");

        this.msg = "Cadastrado com sucesso" + res;
        this.error = false;
        //console.log(res);
        console.log(res.data);
      } catch {
        this.msg = "error";
      }
    },
  },
};
</script>