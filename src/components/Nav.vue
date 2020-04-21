<template>
    <div id='nav' class='box'>
      <img id='logo' src='@/assets/logo.png'/>
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
#logo {
  width: 40px
}
.box {
  display: flex;
  align-items:center;
}
#nav {
  font-size: 14px;
  font-weight: 300
}
#nav a::after {
  content: " | ";
  color: #000;
  text-decoration: none;
}
#nav a:last-child::after {
  display: none;
}

</style>
