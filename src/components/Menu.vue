<template>
  <b-navbar toggleable="sm" type="dark" id="menu">
    <b-container fluid="sm">
      <b-navbar-brand to="/">Inicio</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Left -->
        <b-navbar-nav>
          <b-nav-item v-for='(link, i) in nav'
            :key="i + Date.now()"
            :to='link.to'>{{link.name}}</b-nav-item>
        </b-navbar-nav>

        <!-- Right -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="$user" v-for='(link, i) in navAdmin'
            :key="i"
            :to='link.to'>{{link.name}}</b-nav-item>
          <Auth/>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import Auth from '@/components/Auth'

export default {
  components: {
    Auth
  },
  name: 'Menu',
  data () {
    return {
      navAdmin: [
        { to: '/list', name: 'Personas' },
        { to: '/users', name: 'Usuarios' }
      ],
      nav: [
        { to: '/about', name: 'Info' }
      ]
    }
  }
}
</script>

<style scoped>
#menu{
  box-shadow: 0 0.25rem 0.25rem rgba(0,0,0,.25), inset 0 -1px 5px rgba(0,0,0,.25);
  background-color: rgb(52, 73, 94);
  background-color: #563d7c;
}
.box {
  display: flex;
  align-items:center;
}
</style>
