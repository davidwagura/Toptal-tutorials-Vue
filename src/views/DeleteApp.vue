<template>

    {{  Delete }} 
    
    </template>
    
    
    <script>
        import { ref } from 'vue';
        import { onMounted } from 'vue';
        import axios from 'axios'
    
    
        export default {
            setup() {
    
                const Delete = ref([]);
    
                onMounted (() => {
    
                    axios.get(`http://127.0.0.1:8000/api/articles`)
                        .then(response => {
                            Delete.value = response.data;
                        });
                        
                })
    
    
                return { Delete }
            }
        }
    
    </script>
    