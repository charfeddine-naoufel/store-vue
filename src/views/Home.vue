<template>
  <Header />
  <Products />
</template>

<script setup>
import Header from '../Components/Header.vue';
import Products from './Products.vue';
import {ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
onMounted(() => {
  let auth = localStorage.getItem('authenticated')
 
  if (!auth)
  {router.push({name:'Login'})}
})

</script>

<style>

</style>