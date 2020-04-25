<template>
  <b-row>
    <b-col md="8" sm="12">
      <h3 class="display-4">Crear</h3>
      <b-form @submit.prevent="add()" inline>
        <b-input
          id="name"
          v-model="person.name"
          type="text"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder='Nombre'
        ></b-input>
        <b-button type="submit" variant="primary">Agregar</b-button>
      </b-form>

      <h3 class="display-4">Personas</h3>
      <b-spinner v-if="!persons.length" variant="primary" label="Spinning"></b-spinner>
      <b-list-group v-else>
        <b-list-group-item v-for='(p, index) in persons'
          class="d-flex justify-content-between align-items-center"
          :key='index'>
          <router-link
            class="truncate"
            :to="{
              name: 'person',
              params: {
                key: p['.key'],
                uid: p.uid
              }
            }">{{p.name}}</router-link>
          <b-badge variant="danger" @click='remove(p)'>borrar</b-badge>
        </b-list-group-item>
      </b-list-group>
    </b-col>
  </b-row>
</template>

<script>

export default {
  name: 'List',
  firestore () {
    return {
      persons: this.$db.collection('persons')
    }
  },
  data () {
    return {
      msg: 'List',
      person: {
        name: '',
        uid: this.$user.uid
      }
    }
  },
  methods: {
    add () {
      this.$firestore.persons.add(this.person).then(() => {
        this.person.name = ''
      })
    },
    remove (e) {
      this.$firestore.persons.doc(e['.key']).delete()
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}
h3{
  margin-top: 30px;
  font-size: 45px;
}
span.badge{
  cursor: pointer;
}
</style>
