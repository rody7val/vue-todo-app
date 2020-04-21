<template>
  <div class='home'>
    <h3>{{ msg }}</h3>
    <p>Aplicación de ejemplo creada con <a target="_blank" rel="noreferrer noopener" href="https://cli.vuejs.org/">vue-cli</a>.</p>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home'
    }
  }
}
</script>

<style scoped>
</style>
