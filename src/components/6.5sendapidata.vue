<template>
<input type="text" v-model="email">
<input type="text" v-model="password" id="">
<button type="button" @click="addUser">send</button>
</template>

<script>
import axios from 'axios'
export default {
    data(){
       return{
        email: "",
        password: "",
       }
    },
    methods:{
        async addUser(){
            console.warn(this.email, this.password);
            let result = await axios.post('api url', {
                email: this.email,
                password: this.password
            });
            console.warn('result', result);
        }
    }
}
</script>