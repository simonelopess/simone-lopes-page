<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="title">
    <p class="title__pretext">{{ props.preTitle }}</p>
    <h1 class="title__text">{{ props.title }}</h1>
    <div class="title__background">
      <img src="/src/assets/background.png" alt="background" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  preTitle: String,
  title: String,
})
</script>

<style scoped>
.title__pretext {
  font-size: 16px;
  text-align: center;
}
.title {
  margin-top: 120px;
}
.title__text {
  font-size: 48;
  margin-bottom: 24px;
  font-weight: 600;
  text-align: center;
}
.title__background {
  position: absolute;
  top: 0px;
  left: 20;
  z-index: -1;
}
</style>
