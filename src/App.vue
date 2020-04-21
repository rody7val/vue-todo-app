<template>
  <div id='app'>
    <Auth/>
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Auth from '@/components/Auth'

export default {
  components: {
    Nav,
    Auth
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 15px;
}
</style>
