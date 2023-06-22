<template>

    <div class="formsign d-flex flex-column">
        <img class="log" src="../assets/logo.jpg" alt="" />
    
    <input type="text" name="username" id="username" placeholder="username" v-model="user.username">
    <input type="password" name="password" id="password" placeholder="password" v-model="user.password">
    <button @click="login">Login</button>
    <p class="text-center"><router-link :to="{name : 'SignUp'}">Sign Up</router-link> </p>
    </div>
    </template>
    
    <script setup>
    import {ref ,onMounted} from 'vue'
    import axios from 'axios'
    import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
    let success = false
    const user = ref({
        username:'',
        password:''
    
    }) 
    const login =async () => {
        
        await axios.post('https://fakestoreapi.com/auth/login',{
        username:user.value.username,
        password:user.value.password
    
    })
        .then((response) => {
            localStorage.setItem('authenticated', 'true');
            localStorage.setItem('token', response.data.token);
            router.push({name:'Home'})
            console.log(response)
            success = true
        console.log(success)})
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
    
    </style>