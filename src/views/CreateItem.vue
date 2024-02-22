<template>
    <div>
      <h1>Add Car</h1>
      <div>
        <form @submit.prevent="submitForm">
          <div>
            <label for="title">Title:</label>
            <input type="text" id="title" v-model="formData.title" />
          </div>
          <div>
            <label for="body">Body:</label>
            <textarea id="body" v-model="formData.body"></textarea>
          </div>
  
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import axios from 'axios';
  
  export default {
    setup() {
      const formData = ref({
        title: '',
        body: '',
      });
  
      const submitForm = () => {
        axios.post('http://127.0.0.1:8000/api/articles', formData.value)
          .then(response => {
            console.log('Response:', response.data);
            formData.value.title = '';
            formData.value.body = '';
          })
          .catch(error => {
            console.error('Error submitting form:', error);
          });
      };
  
      return { formData, submitForm };
    }
  }
  </script>
  