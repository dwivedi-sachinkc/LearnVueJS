<template>
    <p v-for="item in list" :key="item">
    {{item.id}} --  {{item.email}} - <img :src="item.avatar" alt="">
    </p>
</template>

<script>
import axios from 'axios'
export default {
    name: 'app',
    data(){
        return{
            list : []
        }
    },
    async mounted(){
        let result = await axios.get("https://reqres.in/api/users?page=1");
        this.list = result.data.data;
    }
}
</script>

<style scoped>
*{
    display: none;
}
</style>