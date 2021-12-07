<template>
  <div class="container-fluid mt--6">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-header">
            <div class="row align-items-center">
              <div class="col-8">
                <p class="text-sm mb-0">Lista de Pacientes</p>
              </div>
              <div class="col-4 text-right">
                <b-button
                  v-b-modal.modal-sm
                  variant="primary"
                  id="show-btn"
                  @click="$bvModal.show('bv-modal-example')"
                  ><i class="fas fa-file-medical-alt"></i
                ></b-button>
                &nbsp;
                <b-button
                  v-b-modal.modal-sm
                  variant="info"
                  id="show-btn"
                  @click="$bvModal.show('bv-modal-acompanhante')"
                  ><i class="fas fa-hospital-user"></i
                ></b-button>
              </div>
            </div>
          </div>

          <div class="col-12 mt-2"></div>
          <div class="table-responsive py-4">
            <table class="table table-flush" id="datatable-basic">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Paciente</th>
                  <th scope="col">Unidade</th>
                  <th scope="col">Leito</th>
                  <th scope="col">Contato</th>
                  <th scope="col">Alta</th>
                  <th scope="col">Situação</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="paciente in pacientes.data" :key="paciente.id">
                  <td scope="col">
                    {{ paciente.nome }} {{ paciente.sobrenome }}
                  </td>
                  <td scope="col">{{ paciente.unidade }}</td>
                  <td scope="col">{{ paciente.leito }}</td>
                  <td scope="col">{{ paciente.nome }}</td>
                  <td scope="col">{{ paciente.dt_alta }}</td>
                  <td scope="col" v-if="paciente.dt_alta">Alta</td>
                  <td scope="col" v-else>Internado</td>
                  <td scope="col">
                    <b-button
                      v-b-modal.modal-sm
                      variant="primary"
                      id="show-btn"
                      size="sm"
                      @click="$bvModal.show('bv-modal-edit')"
                      ><i class="fas fa-edit"></i></b-button>
                    &nbsp;
                    <b-button
                      v-b-modal.modal-sm
                      variant="info"
                      id="show-btn"
                      size="sm"
                      @click="deletar(paciente)"
                      ><i class="fas fa-trash-alt"></i></b-button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div>
      <b-modal id="bv-modal-example" size="xl" hide-footer>
        <IncluirPaciente />
      </b-modal>
      <b-modal id="bv-modal-acompanhante" size="xl" hide-footer>
        <IncluirAcompanhante />
      </b-modal>
      <b-modal id="bv-modal-edit" size="xl" hide-footer>
        <EditPaciente />
      </b-modal>
    </div>
  </div>
</template>

<script>
import api from "@/services/api";
import Cookies from "js-cookie";

import Pagination from "@/components/Pagination.vue";
import IncluirPaciente from "@/components/IncluirPaciente.vue";
import EditPaciente from "@/components/EditPaciente.vue";
import IncluirAcompanhante from "@/components/IncluirAcompanhante.vue";

export default {
  name: "ListaPacientes",

  components: {
    Pagination,
    IncluirPaciente,
    EditPaciente,
    IncluirAcompanhante,
  },

  created() {
    this.paginate();
  },

  data() {
    return {
      pacientes: { data: [] },
      editForm: false,
    };
  },
  methods: {
    async paginate(page = 1) {
      const token = Cookies.get("__mytoken");

      const { data: pacientes } = await api.get("pacientes", {
        headers: { Authorization: `Bearer ${token}` },
        params: { page },
      });
      this.pacientes = pacientes;
    },

    deletar(paciente){
      const token = Cookies.get("__mytoken");
      const header = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      api.delete("pacientes/"+ paciente.id, header).then(res => {
        console.log("Paciente removido com sucesso =>",res);
        this.$router.replace("/");

      }).catch((error, msg, retorno) => {
          this.msg = msg;
          this.retorno = retorno = true;

          if (error.response) {
            const status = error.response.status;
            console.log("Status => ",error);
                     
          } else if (error.request) {
            this.msg = "Verificar conexão da API";
            console.log("Verificar conexão da API =>", error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log("aqui => ", error.config);
        });
      
      console.log("paciente de ID => ", paciente.id);
    },
  },
};
</script>