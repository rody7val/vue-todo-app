<template>
  <div class='list'>
    <h3>{{msg}}</h3>
    <input type='text'
      placeholder='Nombre'
      v-model='person.name'
      @keyup.enter='add()'/>
    <button @click='add()'>Agregar</button>
    <br>
    <br>
    <ul>
      <li v-for='(p, index) in persons' :key='index'>
        <div class='item truncate'>
          <router-link
            :to="{
              name: 'person',
              params: {
                key: p['.key']
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
      msg: 'List Names',
      person: {
        name: ''
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
  margin: 0 auto!important;
  list-style-type: none;
  margin: 0;
  padding: 3px;
  font-family: monospace;
  background-color: #eee;
}
.truncate {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item{
  text-align: left;
  display: inline-block;
  min-height: 22px;
  max-width: 250px;
  font-size: 1rem;
  background: white;
}
.remove{
  background-color: #fff;
  border: 1px solid coral;
  color: coral;
  width: 50px;
  float: right;
  display: inline-block;
  cursor: pointer;
}
.remove:hover{
  color: #fff;
  background-color: tomato;
}
</style>
