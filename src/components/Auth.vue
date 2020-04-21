<template>
  <div class='auth'>
    <div id='signIn' v-if='$user'>
      <div>
        <img :src='$user.photoURL' :alt='$user.displayName'>
      </div>
      <b>{{$user.displayName}}</b>
      <i>{{$user.email}}</i>
      <button @click="signOut">Salir</button>
    </div>
    <div v-else>
      <div id='btn-login' class='box' @click='signIn'>
        <img id='img-login' src='@/assets/auth.png'>
        <div id='text-login'>ACCEDER</div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Auth',
  methods: {
    signIn () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then(result => {
        alert('signIn!', result)
        this.$router.replace('/list')
      }).catch(error => {
        alert(error)
      })
    },
    signOut () {
      firebase.auth().signOut().then(result => {
        alert('signOut!', result)
        this.$router.replace('/')
      }).catch(error => {
        alert(error)
      })
    }
  }
}
</script>

<style scoped>
#signIn{
  font-size: 12px;
  text-align: right;
  position: fixed;
  top: 15px;
  right: 15px;
}
#signIn img {
  display: inline-block;
  width: 40px;
  border-radius: 50%;
}
b, i {
  display: block;
}
#btn-login{
  cursor: pointer;
  position: fixed;
  top: 15px;
  right: 15px;
  padding: 0.5em;
  border: 1px solid #065fd4;
  border-radius: 2px ;
}
#img-login{
  width: 24px;
  display: inline-block;
}
#text-login{
  padding-left: 10px;
  letter-spacing: 0.01px;
  font-weight: 600;
  font-size: 14px;
  color: #065fd4;
  display: inline-block;
}
.box {
   display: flex;
   align-items:center;
}
</style>
