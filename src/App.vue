<template>
  <div id="app">
    <div>
      <NavBar v-if="notIsLoginPage" />
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      contact: "",
    };
  },
  computed: {
    notIsLoginPage() {
      return this.$route.name !== "Login";
    },
  },
};
</script>

