<template>
  <div class='lisIdt'>
    <h3>{{ name }}</h3>
    <p>{{ id }}</p>
  </div>
</template>

<script>

export default {
  name: 'personId',
  data () {
    return {
      id: this.$route.params.id,
      name: this.$route.params.name
    }
  }
}
</script>

<style scoped>
</style>
