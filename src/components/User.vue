<template>
  <div class='userId'>
    <br>
    <div class="box">
      <div>
        <img :src="user.img">
      </div>
      <div>
        <h3>{{ user.name }}</h3>
        <i>{{user.email}}</i>
      </div>
    </div>
    <small><p><b>Activo? </b> {{user.active}}</p>
    <p><b>Administrador? </b>{{user.admin}}</p>
    <p>Creado {{$moment(user.created).calendar()}}</p></small>
  </div>
</template>

<script>
export default {
  name: 'user',
  firestore () {
    return {
      user: this.$db.collection('users').doc(this.$route.params.key)
    }
  }
}
</script>

<style scoped>
h3{
  margin: 0
}
p{
  margin: 0.3em
}
small{
  margin-left: 10px;
  display: block;
}
img{
  border-radius: 50%;
  width: 80px;
  padding: 0 10px 0 10px;
}
.box {
  display: flex;
  align-items:center;
}
</style>
