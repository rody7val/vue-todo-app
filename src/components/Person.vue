<template>
  <div class='lisId'>
    <h3>{{ person.name }}</h3>
  </div>
</template>

<script>

export default {
  name: 'person',
  firestore () {
    return {
      person: this.$db.collection('persons').doc(this.$route.params.key)
    }
  }
}
</script>

<style scoped>
</style>
