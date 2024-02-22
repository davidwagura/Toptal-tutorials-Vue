<template>

  <div>
    <router-link to="/create">Add</router-link>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in deleteItems" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.boby }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
    
    
    <script>
        import { ref } from 'vue';
        import { onMounted } from 'vue';
        import axios from 'axios'
    
    
        export default {
            setup() {
    
                const deleteItems = ref([]);
    
                onMounted (() => {
    
                    axios.get(`http://127.0.0.1:8000/api/articles/{articles}`)
                        .then(response => {
                            deleteItems.value = response.data;
                        });
                        
                })
    
    
                return { deleteItems }
            }
        }
    
    </script>
    