<template>
<img class="log" src="../assets/logo.jpg" alt="" />
<div class="formsign">

<input type="text" name="username" id="username" placeholder="username" v-model="user.username">
<input type="text" name="email" id="email" placeholder="email" v-model="user.email">
<input type="password" name="password" id="password" placeholder="password" v-model="user.password">
<button @click="register">sign up</button>
<p class="text-center"><router-link :to="{name : 'Login'}">Login</router-link> </p>
</div>
</template>

<script setup>
import {ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
let success = false
const user = ref({
    username:'',
    email:'',
    password:''

}) 
const register =async () => {
    await axios.post("https://fakestoreapi.com/users",Object.values(user.value))
    .then((response) => {
        // root.$router.push('/')
        // alert('ok')
        
        console.log(response)
        localStorage.setItem('authenticated', 'true');
             
             router.push({name:'Home'})
    

})

    .catch((error) => {
          error = error.data
        })
        
}
onMounted(() => {
  let auth = localStorage.getItem('authenticated')
  if (auth)
  {router.push({name:'Home'})}
})

</script>

<style scoped>
.formsign input{

    padding: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    display: block;
    margin-bottom: 10px;
    border-radius: 15px;
    border: 2px solid rgb(110, 191, 238);
    color: rgb(110, 191, 238);
}
.formsign button{
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 320px;
    display: block;
    margin-bottom: 10px;
    margin-top: 20px;
    border-radius: 15px;
    color: white; 
    background-color: rgb(110, 191, 238);  
    cursor: pointer;
}
img{text-align: center;
    }
</style>