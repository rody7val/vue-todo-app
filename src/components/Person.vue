<template>
  <div class='lisId'>
    <div v-if="!person.name && !user.name">
      <img class="load" src="https://lh3.googleusercontent.com/proxy/LsIr87ZtL1wySWpMnZ8VN6Xs0k1O4yl6QwStBxqDjkzD4QBVB_Apb7cW5aoA5wO8Qyy_xIf0zLNg3tD_huEBLg">
    </div>
    <div v-else>
      <h3>{{ person.name }}</h3>
      <small>
        <p class="box">creado por <span><img :src="user[0].img"></span> <router-link :to="{
          name: 'user',
          params: {
            key: user[0]['.key']
          }
        }">{{ user[0].name }}</router-link></p>
      </small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'person',
  firestore () {
    return {
      person: this.$db.collection('persons').doc(this.$route.params.key),
      user: this.$db.collection('users').where('uid', '==', this.$route.params.uid)
    }
  }
}
</script>

<style scoped>
.box {
  display: flex;
  align-items:center;
}
span img{
  width: 20px;
  margin: 0 5px;
  border-radius: 50%;
}
.load{
  width: 60px;
}
</style>
