<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <img
    :src="`/src/assets/profile.png`"
    :alt="`Simone`"
    :style="{ width: `${props.width}px`, height: `${props.height}px` }"
  />
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  width: String,
  height: String,
})
</script>

<style scoped>
img {
  display: block;
}
</style>
