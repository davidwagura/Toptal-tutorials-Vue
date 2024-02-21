<template>

    {{  update }} 
    
    </template>
    
    
    <script>
        import { ref } from 'vue';
        import { onMounted } from 'vue';
        import axios from 'axios'
    
    
        export default {
            setup() {
    
                const update = ref([]);
    
                onMounted (() => {
    
                    axios.get(`http://127.0.0.1:8000/api/articles`)
                        .then(response => {
                            update.value = response.data;
                        });
                        
                })
    
    
                return { update }
            }
        }
    
    </script>
    