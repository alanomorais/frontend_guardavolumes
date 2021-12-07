<template>
  <div>
    <h2>Dashboard</h2>

        <Card class="body text-center" />
  </div>
</template>

<script>

import Card from "../components/Card.vue";

export default {
  name: "Dashboard",
  components: {
    Card,
  },
};
</script>

<style scoped>
.tabelaTotal {
  border: solid 0.1px black;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.readBody {
  margin-top: 20px;
  margin-bottom: 20px;
}

.card {
  margin-left: 20px;
}
.card b {
  font-size: 28px;
}

#cards {
  background-color: #58af9c;
  color: white;
}

h2 #cards {
  margin-top: 30px;
}
</style>