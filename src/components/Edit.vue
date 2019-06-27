<template>
  <div>
    <h1>Edit Post with name {{post.title}}</h1>
    <form @submit.prevent="updatePost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Post Title:</label>
            <input type="text" class="form-control" v-model="post.title">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Post Body:</label>
            <textarea class="form-control" v-model="post.body" rows="5"></textarea>
          </div>
        </div>
      </div><br />
      <div class="form-group">
        <button class="btn btn-primary" >Edit</button>
      </div>
    </form>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    data() {
      return {
        post: {
          title: this.$route.params.title,
          body: this.$route.params.body,
        }
      }
    },
    methods: {
      updatePost() {
        let uri = `http://localhost:4040/posts/update/${this.$route.params.id}`;
        this.axios.post(uri, this.post).then(() => {
          this.$router.push({
            name: 'Posts'
          });
        });
        alert('post edited')
      },
    }
  }
</script>