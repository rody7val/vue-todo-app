<template>
  <div class='listId'>
    <div v-if='!person.name && !user.name'>cargando...</div>
    <div v-else>
      <div v-if='edit' style='margin-top: 1em; margin-bottom: 1em;'>
        <input type='text'
          placeholder='Editar'
          v-model='personEdit.name'
          @keyup.enter='update(person)'/>
          <div style="display: inline-block;">
            <div v-if="load">
              cargando...
            </div>
            <div v-else>
              <button @click='update(person)'>Guardar</button>
            </div>
          </div>
      </div>
      <div v-else>
        <h3>{{ person.name }}</h3>
      </div>
      <button @click='handleEdit'>{{edit ? 'Cancelar' : 'Editar'}}</button>
      <hr>
      <small>
        <p class='box'>Creado {{ $moment(person.created).format('[el] ll') }} por <span><img :src='user[0].img'></span> <router-link :to="{
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
      edit: false,
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
</style>
