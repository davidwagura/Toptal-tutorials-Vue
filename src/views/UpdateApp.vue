<template>
  <div>
    <h1>Edit Car</h1>
    <div>
      <form>
        <div>
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="formData.title" />
        </div>
        <div>
          <label for="body">Body:</label>
          <textarea id="body" v-model="formData.body"></textarea>
        </div>

        <button @click="submitForm()" type="button">Update</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UpdateApp',

  data() {
    return {
      formData: {
        title: '',
        body: '',
      },
    };
  },

  created() {
    const id = this.$route.params.id;
    axios.get(`http://127.0.0.1:8000/api/articles/${id}`)
    .then(response => {
      let res = response.data;
      this.formData.title = res.title
      this.formData.body = res.body

      // console.log(this.formData);
    })
  },

  methods: {

    submitForm() {
      const id = this.$route.params.id;
      axios.put(`http://127.0.0.1:8000/api/articles/${id}`, this.formData)
        .then(response => {
            this.formData.title = response.data.title
            this.formData.body = response.data.body
            console.log(response.data)
        });
    }

  },
};
</script>
