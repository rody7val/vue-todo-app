<template>
  <div class='list'>
    <p>{{subtitle}}</p>
    <ul>
      <li v-for='(p, index) in persons' :key='index'>
        {{p.name}} <button>x</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      subtitle: 'List from db:',
      persons: [
        { name: 'Rod' },
        { name: 'Tom' },
        { name: 'Mos' }
      ]
    }
  }
}
</script>

<style scoped>
ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-family: monospace;
}
</style>
