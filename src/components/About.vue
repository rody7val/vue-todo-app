<template>
  <b-jumbotron style="background-color: #fff">
    <template v-slot:header>About</template>

    <template v-slot:lead>
      Repositorio en <a target="_blank" href="https://github.com/rody7val/vue-todo-app" rel="noreferrer noopener">Github</a>.
    </template>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
</style>
