<template>
  <b-jumbotron style="background-color: #fff">
    <template v-slot:header>Inicio</template>

    <template v-slot:lead>
      Aplicación de ejemplo creada con <a target="_blank" rel="noreferrer noopener" href="https://cli.vuejs.org/">vue-cli</a>.
    </template>

    <hr class="my-4">

    <p>By rod7val@gmail.com</p>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
svg{
  color: red
}
</style>
