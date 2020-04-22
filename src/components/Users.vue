<template>
  <div class='users'>
    <h3>{{msg}}</h3>
    <ul>
      <div v-if="!users.length">
        <img class="load" src="https://lh3.googleusercontent.com/proxy/LsIr87ZtL1wySWpMnZ8VN6Xs0k1O4yl6QwStBxqDjkzD4QBVB_Apb7cW5aoA5wO8Qyy_xIf0zLNg3tD_huEBLg">
      </div>
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
.load{
  width: 60px;
}
</style>
