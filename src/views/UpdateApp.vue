<template>
  <div>
    <h1>Edit Car</h1>
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

        <button type="submit">Update</button>
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
      id: null,
      title: '',
      body: '',
    });

    const updateForm = (data) => {
      formData.value.id = data.id;
      formData.value.title = data.title;
      formData.value.body = data.body;
    };

    const submitForm = () => {
      axios.put(`http://127.0.0.1:8000/api/articles/${formData.value.id}`, formData.value)
        .then(response => {
          console.log('Response:', response.data);
          formData.value.id = null;
          formData.value.title = '';
          formData.value.body = '';
        })
        .catch(error => {
          console.error('Error updating form:', error);
        });
    };

    const fetchItems = () => {
      axios.get('http://127.0.0.1:8000/api/articles')
        .then(response => {
          updateForm(response.data); 
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    };

    fetchItems();

    return { formData, submitForm };
  }
}
</script>
