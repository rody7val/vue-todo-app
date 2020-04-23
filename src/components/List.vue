<template>
  <div class='list'>
    <h3>Create</h3>
    <input type='text'
      placeholder='Nombre'
      v-model='person.name'
      @keyup.enter='add()'/>
    <button @click='add()'>Agregar</button>
    <br>
    <br>
    <h3>List</h3>
    <ul>
      <div v-if="!persons.length">cargando...</div>
      <li v-for='(p, index) in persons' :key='index'>
        <div class='item truncate'>
          <router-link
            :to="{
              name: 'person',
              params: {
                key: p['.key'],
                uid: p.uid
              }
            }">{{p.name}}</router-link>
        </div>
        <button class='remove' @click='remove(p)'>x</button>
      </li>
    </ul>
  </div>
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
      persons: [],
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
ul{
  width: 300px;
}
.truncate {
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item{
  display: inline-block;
  max-width: 250px;
}
.remove{
  color: #fff;
  background-color: #dc3545;
  border: 1px solid #dc3545;
  float: right;
  display: block;
  cursor: pointer;
  border-radius: 4px;
}
.remove:hover{
  color: #fff;
  background-color: #bd2130;
  border-color: #b21f2d;
}
</style>
