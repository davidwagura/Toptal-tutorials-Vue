<template>
    <div>
      <router-link to="/create">Add Item</router-link>
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
          <tr v-for="article in articles" :key="article">
            <td>{{ article.id }}</td>
            <td>{{ article.title }}</td>
            <td>{{ article.body }}</td>
            <td>
              <router-link :to="'/update/' + article.id">Edit</router-link>
            </td>
            <td>
              <button @click="deleteItem()">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'IndexItem',

    data() {
      return {
        formData: []
      };
    },

    created() {
      this.listArticles()
    },

      methods: {
        listArticles() {
          axios.get('http://127.0.0.1:8000/api/articles')
          .then(response => {
            
            this.formData = response.data;
            return response
          });
        },
          deleteItem(id) {
            axios.delete(`http://127.0.0.1:8000/api/articles/${id}`)

            .then( response => {
              this.ProjectList();
              return response
            })
          
        }
        
    }
  }
  
  
  </script>
  