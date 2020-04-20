<template>
    <div id='nav'>
      <router-link
        v-for='(link, index) in links'
        :key="index"
        :to='link.to'>{{link.name}}</router-link>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      links: [
        { to: '/', name: 'Home' },
        { to: '/list', name: 'List' },
        { to: '/about', name: 'About' }
      ]
    }
  }
}
</script>

<style scoped>
#nav a::after {
  content: " | ";
  color: #000;
  text-decoration: none;
}
#nav a:last-child::after {
  display: none;
}

</style>
