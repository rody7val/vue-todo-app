<template>
  <b-row>
    <b-col md="8" sm="12">
    <h3 class="display-4">Usuarios registrados</h3>
    <b-spinner v-if="!users.length" variant="primary" label="Spinning"></b-spinner>
    <b-list-group v-else
      v-for='(user, index) in users' :key='index'>
      <b-list-group-item class="d-flex align-items-center">
        <b-avatar variant="info" :src="user.img" class="mr-3"></b-avatar>
        <b-button v-b-toggle.sidebar-backdrop>{{user.name}}</b-button>
        <b-sidebar
          id="sidebar-backdrop"
          :title="user.name"
          bg-variant="dark"
          text-variant="light"
          backdrop
          right
          shadow>
          <div class="px-3 py-2">
            <p><b>{{user.email}}</b></p>
            <p><b>Activo? </b> <b-badge :variant="user.active ? 'success' : 'danger'">{{user.active ? 'si' : 'no'}}</b-badge></p>
            <p><b>Administrador? </b> <b-badge :variant="user.admin ? 'success' : 'danger'">{{user.admin ? 'si' : 'no'}}</b-badge></p>
            <hr>
            <b-img :src="user.img" fluid thumbnail></b-img>
            <p>Creado {{ $moment(user.created).format('[el] ll') }}</p>
          </div>
        </b-sidebar>
      </b-list-group-item>
    </b-list-group>
    </b-col>
  </b-row>
</template>

<script>

export default {
  name: 'Users',
  firestore () {
    return {
      users: this.$db.collection('users')
    }
  }
}
</script>

<style scoped>
p{margin: 0}
h3{
  margin-top: 30px;
  font-size: 45px;
}
</style>
