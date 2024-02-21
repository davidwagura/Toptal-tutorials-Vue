<template>

    {{  item }} 
    
</template>
    
    
    <script>
        import { ref } from 'vue';
        import { onMounted } from 'vue';
        import axios from 'axios'
    
    
        export default {
            setup() {
    
                const createItems = ref([]);
    
                onMounted (() => {
    
                    axios.get(`http://127.0.0.1:8000/api/articles`)
                        .then(response => {
                            createItems.value = response.data;
                        });
                        
                })
    
    
                return { createItems }
            }
        }
    
    </script>
    