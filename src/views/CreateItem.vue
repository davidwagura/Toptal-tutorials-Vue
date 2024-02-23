<template>
    <div>
      <h1>Add Car</h1>
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
  
          <button type="button" @click="submitForm()">Submit</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'CreatItem',
    
    data() {
      return {
        formData: {
          title: '',
          body: '',
          },
      };
    },
    methods: {
      submitForm() {
        axios.post('http://127.0.0.1:8000/api/article', this.formData)
        .then(response => {
          console.log('response');
          
            this.formData.title = ""
            this.formData.body = ""
          
          return response
        });
      }
    }

  }  
  </script>
  //    const formData = ref({
    title: '',
    body: ''
  })

