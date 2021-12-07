<template>
  <footer style="margin-top: 20px">
    <p class="footer text-center">
      &copy; 2021 - Todos os direitos reservados
      <br />
      Hospital São José
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer",

};
</script>

<style scoped>
footer {
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: darkgray;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>