<template>
  <div class='home'>
    <h3>{{ msg }}</h3>
    <List/>
  </div>
</template>

<script>
import List from '@/components/List'

export default {
  components: {
    List
  },
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
