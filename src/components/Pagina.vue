<template>
  <div>
    Pagina
    <div class="btn btn-light" v-on:click="generaTodos">Genera todos</div>
    <div v-for="elemento in elementi" :key="elemento.id">

        {{elemento.title}}
        {{elemento.id}}

    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Pagina',
  props: {
   
  },
  data() {
    return {
      elementi: [],
    }
  },
  created: function () {

  },
  methods: {
    generaTodos() {
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => 
      this.elementi = json
      // console.log(json)
      )
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.active {
  color: red;
}
</style>
