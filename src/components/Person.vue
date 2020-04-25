<template>
  <b-row>
    <b-col md="8" sm="12">
  <b-spinner v-if="!persons.length" variant="primary" label="Spinning"></b-spinner>
  <b-card v-else>
    <template v-slot:header >
      <b-avatar class="mr-2"
        variant="dark"
        size="2rem"
        :src='user[0].img'></b-avatar>
      <router-link :to="{
          name: 'user',
          params: {
            key: user[0]['.key']
          }
        }">{{ user[0].name }}</router-link>
      <b-badge class="float-right m-2"
        :variant="edit ? 'dark' : 'light'"
        @click='handleEdit'>{{edit ? 'Cancelar' : 'Editar'}}</b-badge>
    </template>

    <div v-if='!person.name && !user.name'>

    </div>
    <div v-else>
      <div v-if='edit'>
        <b-form @submit.prevent="update(person)" inline>
          <b-input
            id="name"
            v-model="personEdit.name"
            type="text"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder='Editar'
          ></b-input>
            <div v-if="load">
              <b-spinner variant="primary" label="Spinning"></b-spinner>
            </div>
            <div v-else>
              <b-button type="submit" variant="primary">Guardar</b-button>
            </div>
        </b-form>
      </div>
      <div v-else>
        <h3 class="display-4">{{ person.name }}</h3>
      </div>
      <hr>
      <small>
        <time> {{ $moment(person.created).calendar() }} </time>
      </small>
    </div>
  </b-card>
  <a class="back btn btn-link" @click="$router.go(-1)">Volver</a>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'person',
  firestore () {
    return {
      persons: this.$db.collection('persons'),
      person: this.$db.collection('persons').doc(this.$route.params.key),
      personEdit: this.$db.collection('persons').doc(this.$route.params.key),
      user: this.$db.collection('users').where('uid', '==', this.$route.params.uid)
    }
  },
  methods: {
    handleEdit () {
      this.edit = !this.edit
    },
    update (e) {
      this.load = true
      this.$firestore.persons.doc(e['.key']).update({name: this.personEdit.name}).then(() => {
        this.handleEdit()
        this.load = false
      })
    }
  },
  data () {
    return {
      load: false,
      edit: false
    }
  }
}
</script>

<style scoped>
time{
  text-transform: uppercase;
  color: #8e8e8e;
}
h3{
  font-size: 40px;
}
.card {
  margin-top: 45px
}
.card-header a {
  color: #212529;
  text-decoration: none;
}
.card-header .badge{
  cursor: pointer
}
.box {
  display: flex;
  align-items:center;
}
a.back{
  color: #007bff;
}
</style>
