<script setup>
import '@/assets/bootstrap.css'
import '@/assets/bootstrap.js'
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

</script>

<template>
  <div>
      <header>
          <NavBar />
      </header>
      
      <RouterView />
      <Footer />  
  </div>
</template>

<style scoped>

</style>
