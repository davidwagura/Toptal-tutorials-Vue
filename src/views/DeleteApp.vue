<template>

    {{  items }} 
    
</template>
    
    
    <script>
        import { ref } from 'vue';
        import { onMounted } from 'vue';
        import axios from 'axios'
    
    
        export default {
            setup() {
    
                const deleteItems = ref([]);
    
                onMounted (() => {
    
                    axios.get(`http://127.0.0.1:8000/api/articles/delete`)
                        .then(response => {
                            deleteItems.value = response.data;
                        });
                        
                })
    
    
                return { deleteItems }
            }
        }
    
    </script>
    