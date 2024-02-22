<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in createItems" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.body }}</td>
            <td>
              <router-link :to="'/update/' + item.id">Edit</router-link>
            </td>
            <td>
              <button @click="deleteItem(item.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import axios from 'axios';
  
  export default {
    setup() {
      const createItems = ref([]);
  
      const fetchItems = () => {
        axios.get('http://127.0.0.1:8000/api/articles')
          .then(response => {
            createItems.value = response.data;
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      };
  
      const deleteItem = (itemId) => {
        axios.delete(`http://127.0.0.1:8000/api/articles/${itemId}`)
          .then(() => {
            fetchItems(); 
          })
          .catch(error => {
            console.error('Error deleting item:', error);
          });
      };
  
      onMounted(fetchItems);
  
      return { createItems, deleteItem };
    }
  }
  </script>
  