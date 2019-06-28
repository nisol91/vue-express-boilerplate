<template>
  <div>
    <h1>Notes</h1>
    <div class="row">
      <div class="col-md-10"></div>
      <div class="col-md-2">
        <router-link :to="{ name: 'FormNotes' }" class="btn btn-primary">Create Note</router-link>
      </div>
    </div><br />

    <table class="table table-hover">
      <thead>
        <tr>
          <th>done?</th>

          <th>Title</th>
          <th>Body</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="note in notes" :key="note._id">
          <td>
            <b-form-checkbox id="checkbox-1" v-model="status" name="checkbox-1" value="done"
              unchecked-value="" @change="doneTask()"></b-form-checkbox>
              {{status}}
          </td>
          <td ><h4 v-bind:class="{ fatto: isFatto }" >{{ note.title }}</h4></td>
          <td><h4 v-bind:class="{ fatto: isFatto }" >{{ note.body }}</h4></td>
          <td>
            <router-link :to="{name: 'Edit', params: { id: note._id, title: note.title, body: note.body }}"
              class="btn btn-primary">Edit</router-link>
          </td>
          <td><button class="btn btn-danger" @click.prevent="deleteNote(note._id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  /* eslint-disable */

  export default {
    data() {
      return {
        notes: [],
        status: '',
        isFatto: false
      }
    },
    created() {
      let uri = 'http://localhost:6052/notes';
      this.axios.get(uri).then(response => {
        this.notes = response.data;
      });
    },
    methods: {
      doneTask() {
        this.isFatto = !this.isFatto
        
      },
      deletePost(id) {
        let uri = `http://localhost:6052/notes/delete/${id}`;
        this.axios.delete(uri).then(response => {
          this.notes.splice(this.notes.indexOf(id), 1);
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fatto {
  text-decoration: line-through;
}
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