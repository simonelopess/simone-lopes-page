<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <Navbar />
  <main class="container">
    <RouterView />
  </main>
</template>

<style>
body {
  font-family: 'Raleway', serif;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background: var(--color-gray-900);
  color: var(--color-white);
  overflow-x: hidden;
  background-image: url('/src/assets/background.png');
  background-repeat: repeat-y;
}
.container {
  max-width: 1280px;
  padding: 20px;
  margin: 0 auto;
  margin-top: 180px;
}

@media (max-width: 1023px) {
  .container {
    margin-top: 120px;
  }
}
</style>
