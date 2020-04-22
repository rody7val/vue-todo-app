<template>
    <div id='nav' class='box'>
      <router-link v-for='(link, index) in nav'
        :key="index"
        :to='link.to'>{{link.name}}</router-link>
      <router-link v-for='(link, index) in navAdmin' v-if="$user"
        :key="index"
        :to='link.to'>*{{link.name}}</router-link>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      navAdmin: [
        { to: '/list', name: 'Persons' },
        { to: '/users', name: 'Users' }
      ],
      nav: [
        { to: '/', name: 'Home' },
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
  font-size: 16px;
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
