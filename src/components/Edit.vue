<template>
  <div>
    <b-alert variant="success" v-model="showAlert">Elemento Modificato con successo</b-alert>
    <h1>Edit Element with name {{element.title}}</h1>
    <form @submit.prevent="updatePost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Title:</label>
            <input type="text" class="form-control" v-model="element.title">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Body:</label>
            <textarea class="form-control" v-model="element.body" rows="5"></textarea>
          </div>
        </div>
      </div><br />
      <div class="form-group">
        <button v-on:click="showAlert=true" class="btn btn-primary" >Edit</button>
      </div>
    </form>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    data() {
      return {
        element: {
          title: this.$route.params.title,
          body: this.$route.params.body,
        },
        showAlert: false,
      }
    },
    methods: {
      updatePost() {
        let uri = `http://localhost:6052/posts/update/${this.$route.params.id}`;
        this.axios.post(uri, this.element).then(() => {
          // this.$router.push({
          //   name: 'Home'
          // });
        });
        // alert('element edited')
      },
    }
  }
</script>