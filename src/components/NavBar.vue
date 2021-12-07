<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
            <router-link id="logo-url" to="/">
        <img id="logo" src="../assets/img/boxes.png" :alt="alt">        
      </router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/" active>Dashboard</b-nav-item>
          <b-nav-item to="/pacientes">Pacientes</b-nav-item>
          <b-nav-item to="/armarios">Armarios</b-nav-item>
          <b-nav-item to="/movimentacoes">Movimentações</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em v-show="contact">{{ contact.name }}</em>
            </template>
            <b-dropdown-item href="#">Perfil</b-dropdown-item>
            <b-dropdown-item v-on:click="logout">Sair</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Cookies from 'js-cookie';

export default {
  name: "NavBar",

  data() {
    return {
      logo_src: "@/assets/img/boxes.png",
      alt: "Guarda Volumes",
      contact: null,
    };
  },

  beforeMount() {
    const contacts = JSON.parse(localStorage.getItem("__User"));
    this.contact = contacts ? contacts : [];
    console.log(this.contact);
  },
    methods: {
    logout() {
      Cookies.remove("__mytoken");
      localStorage.removeItem("__User");

      this.$router.replace('/Login');
    },
  },
};
</script>

<style scoped>
img {
  width: 2rem;
}
</style>