<template>
  <div class="container">
    <h1>This is an Paciente page</h1>
    <ListaPacientes />    
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";
import FormPaciente from "../components/IncluirPaciente.vue";
import ListaPacientes from "../components/ListaPacientes.vue";
export default {
  name: "Paciente",
  components: {
    ListaPacientes,
  },
  data() {
    return {
      pacientes: [],
      editForm: false,

    };
  },
  async created() {
    const token = Cookies.get("__mytoken");
    let results = await axios.get("http://localhost:8000/api/v1/pacientes", {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log(results.data);
  },

  methods: {
    editPage() {
      this.editForm = true;
    },
  },
};
</script>
