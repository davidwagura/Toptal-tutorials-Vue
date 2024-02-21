<template>

    {{  create }} 
    
    </template>
    
    
    <script>
        import { ref } from 'vue';
        import { onMounted } from 'vue';
        import axios from 'axios'
    
    
        export default {
            setup() {
    
                const create = ref([]);
    
                onMounted (() => {
    
                    axios.get(`http://127.0.0.1:8000/api/articles`)
                        .then(response => {
                            create.value = response.data;
                        });
                        
                })
    
    
                return { create }
            }
        }
    
    </script>
    