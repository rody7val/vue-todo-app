<template>
  <div class='users'>
    <h3>{{msg}}</h3>
    <ul>
      <div v-if="!users.length">cargando...</div>
      <li v-for='(user, index) in users' :key='index'>
        <router-link
          :to="{
            name: 'user',
            params: {
              key: user['.key']
            }
          }">{{user.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Users',
  firestore () {
    return {
      users: this.$db.collection('users')
    }
  },
  data () {
    return {
      msg: 'Users'
    }
  }
}
</script>

<style scoped>
</style>
