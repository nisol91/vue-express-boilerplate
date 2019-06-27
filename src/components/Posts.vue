<template>
  <div>
    <h1>Posts</h1>
    <div class="row">
      <div class="col-md-10"></div>
      <div class="col-md-2">
        <router-link :to="{ name: 'Form' }" class="btn btn-primary">Create Post</router-link>
      </div>
    </div><br />

    <table class="table table-hover">
      <thead>
        <tr>
          <th>Title</th>
          <th>Body</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post._id">
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
          <td>
            <router-link :to="{name: 'Edit', params: { id: post._id, title: post.title, body: post.body }}" class="btn btn-primary">Edit</router-link>
          </td>
          <td><button class="btn btn-danger" @click.prevent="deletePost(post._id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
   export default {
      data() {
        return {
          posts: []
        }
      },
      created() {
      let uri = 'http://localhost:4040/posts';
      this.axios.get(uri).then(response => {
        this.posts = response.data;
      });
    },
    methods: {
      deletePost(id)
      {
        let uri = `http://localhost:4040/posts/delete/${id}`;
        this.axios.delete(uri).then(response => {
          this.posts.splice(this.posts.indexOf(id), 1);
        });
      }
    }
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