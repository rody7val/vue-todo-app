<template>
  <div class='about'>
    <h3>{{ msg }}</h3>
    <p>Repositorio en <a target="_blank" href="https://github.com/rody7val/vue-todo-app" rel="noreferrer noopener">Github</a>.</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'About'
    }
  }
}
</script>

<style scoped>
</style>
